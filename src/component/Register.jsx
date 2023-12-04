import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import AlertRegister from "./AlertRegister";
import Footer from "./Footer";

const Register = () => {
  const [info, setInfo] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    setInfo({
      name: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    });
  }, []);

  const changeInfo = (value, name) => {
    setInfo({ ...info, [name]: value });
  };

  const fetchRegisterUser = async () => {
    try {
      const resp = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(info),
      });
      if (resp.ok) {
        navigate("/login");
      } else {
        setError("Qualche campo non è corretto!");
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="login-container">
      <NavBar />
      <h1 className="mt-3">Registrati</h1>

      <Row className="justify-content-center">
        <Col xs="8">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group className="mb-3 text-start ">
              <Form.Label column sm="2" className="fw-bold">
                Nome
              </Form.Label>

              <Form.Control
                type="text"
                value={info.name}
                onChange={(e) => changeInfo(e.target.value, "name")}
                placeholder="inserisci un nome con minimo 2 caratteri"
              />
            </Form.Group>
            <Form.Group className="mb-3  text-start">
              <Form.Label column sm="2" className="fw-bold">
                Cognome
              </Form.Label>

              <Form.Control
                type="text"
                value={info.lastName}
                onChange={(e) => changeInfo(e.target.value, "lastName")}
                placeholder="inserisci un cognome con minimo 2 caratteri"
              />
            </Form.Group>
            <Form.Group className="mb-3  text-start">
              <Form.Label column sm="2" className="fw-bold">
                Username
              </Form.Label>
              <Form.Control
                type="text"
                value={info.username}
                onChange={(e) => changeInfo(e.target.value, "username")}
                placeholder="inserisci uno username con minimo 4 caratteri"
              />
            </Form.Group>
            <Form.Group className="mb-3  text-start">
              <Form.Label column sm="2" className="fw-bold">
                E-mail
              </Form.Label>
              <Form.Control
                type="text"
                value={info.email}
                onChange={(e) => changeInfo(e.target.value, "email")}
                placeholder="inserisci un e-mail"
              />
            </Form.Group>
            <Form.Group className="mb-3  text-start">
              <Form.Label column sm="2" className="fw-bold">
                Password
              </Form.Label>
              <Form.Control
                type="password"
                value={info.password}
                onChange={(e) => changeInfo(e.target.value, "password")}
                placeholder="inserisci la tua Password"
              />
            </Form.Group>
            <div>{error ? <AlertRegister message={error} /> : null}</div>
            <Button onClick={() => fetchRegisterUser()}>Registrati</Button>
          </Form>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Register;
