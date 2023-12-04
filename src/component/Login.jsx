import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SET_TOKEN, setToken } from "../redux/actions";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import AlertLogIn from "./AlertLogIn";
import Footer from "./Footer";

const Login = () => {
  const [info, setInfo] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  useEffect(() => {
    setInfo({
      email: "",
      password: "",
    });
  }, []);

  const changeInfo = (value, name) => {
    setInfo({ ...info, [name]: value });
  };

  const fetchLoginUser = async () => {
    try {
      const resp = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(info),
      });
      if (resp.ok) {
        const data = await resp.json();
        dispatch(setToken(data));
        navigate("/");
        console.log(data);
      } else {
        setError("Credenziali non valide");
        console.log(error);
      }
    } catch (error) {
      console.log(error);
      setError("Si è verificato un errore durante il login. Riprova più tardi.");
    }
  };
  return (
    <Container className="login-container">
      <NavBar />
      <Row className="justify-content-center">
        <Col xs="8" className="mt-5">
          <h1 className="mt-4">I feel Sardegna</h1>

          <Row className="justify-content-end mt-5">
            <Form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Form.Group className="mb-3  text-start fw-bold text-center text-white">
                <Form.Label column sm="2">
                  E-mail
                </Form.Label>
                <Form.Control
                  type="text"
                  value={info.email}
                  onChange={(e) => changeInfo(e.target.value, "email")}
                  placeholder="inserisci un e-mail"
                />
              </Form.Group>
              <Form.Group className="mb-3  text-start fw-bold text-center text-white">
                <Form.Label column sm="2">
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  value={info.password}
                  onChange={(e) => changeInfo(e.target.value, "password")}
                  placeholder="inserisci un Password"
                />
              </Form.Group>
              <div>{error ? <AlertLogIn message={error} /> : null}</div>
              <div>
                {" "}
                <Button onClick={() => fetchLoginUser()}>Accedi</Button>
                <Link to={"/Register"} className="ms-3 text-white">
                  Se non hai un account Registrati
                </Link>
              </div>
            </Form>
          </Row>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Login;
