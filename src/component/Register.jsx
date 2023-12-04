import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Register = () => {
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setInfo({
      nome: "",
      cognome: "",
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
      navigate("/");
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
                value={info.nome}
                onChange={(e) => changeInfo(e.target.value, "nome")}
                placeholder="inserisci Nome"
              />
            </Form.Group>
            <Form.Group className="mb-3  text-start">
              <Form.Label column sm="2" className="fw-bold">
                Cognome
              </Form.Label>

              <Form.Control
                type="text"
                value={info.cognome}
                onChange={(e) => changeInfo(e.target.value, "cognome")}
                placeholder="inserisci Cognome"
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
                placeholder="inserisci Username"
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
                placeholder="inserisci un Password"
              />
            </Form.Group>
            <Button onClick={() => fetchRegisterUser()}>Registrati</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
