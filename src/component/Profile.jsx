import { useEffect, useState } from "react";
import Footer from "./Footer";
import { Badge, Button, Col, Container, Form, Row } from "react-bootstrap";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [showBadgeEmail, setShowBadgeEmail] = useState(false);
  const [showBadgePassword, setShowBadgePassword] = useState(false);
  const [showBadgeUsername, setShowBadgeUsername] = useState(false);
  const [showBadgeName, setShowBadgeName] = useState(false);
  const [showBadgeLastName, setShowBadgeLastName] = useState(false);
  const token = useSelector((state) => state.mainReducer.content.accessToken[0]);

  const fetchProfilo = async () => {
    try {
      const resp = await fetch(`http://localhost:3001/users/me`, {
        method: "GET",
        headers: {
          authorization: `Bearer ` + token,
          "Content-type": "application/json",
        },
      });
      const data = await resp.json();
      setProfile(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfilo();
  }, []);

  return (
    <>
      <NavBar />
      {profile ? (
        <Container>
          <h1>Hey {profile.username} modifica il tuo profilo</h1>
          <Row className="align-items-center">
            <Col>
              {profile ? (
                <img src={profile.avatar} alt="" width={"250px"} height={"250px"} className="rounded-circle" />
              ) : (
                "aspetta"
              )}
            </Col>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-0">Email address</Form.Label>
                  <Form.Control type="email" placeholder={profile.email} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="mb-0">Password</Form.Label>
                  <Form.Control type="password" placeholder="Inserisci una nuova Password" />
                </Form.Group>
                <Form.Group className="my-3">
                  <Form.Label className="mb-1">
                    Username
                    <span
                      className="info-badge text-info"
                      onMouseEnter={() => setShowBadgeUsername(true)}
                      onMouseLeave={() => setShowBadgeUsername(false)}
                    >
                      (?)
                      {showBadgeUsername && (
                        <Badge pill bg="primary">
                          Scrivi un username con più di 4 caratteri
                        </Badge>
                      )}
                    </span>
                  </Form.Label>
                  <Form.Control type="text" placeholder={profile.username} />
                  <Form.Label className="mb-1 mt-3">
                    Name
                    <span
                      className="info-badge text-info"
                      onMouseEnter={() => setShowBadgeName(true)}
                      onMouseLeave={() => setShowBadgeName(false)}
                    >
                      (?)
                      {showBadgeName && (
                        <Badge pill bg="primary">
                          Il nome deve avere più di 2 caratteri
                        </Badge>
                      )}
                    </span>
                  </Form.Label>
                  <Form.Control type="text" placeholder={profile.name} />
                  <Form.Label className="mb-1 mt-3">
                    LastName
                    <span
                      className="info-badge text-info"
                      onMouseEnter={() => setShowBadgeLastName(true)}
                      onMouseLeave={() => setShowBadgeLastName(false)}
                    >
                      (?)
                      {showBadgeLastName && (
                        <Badge pill bg="primary">
                          LastName deve avere più di 2 caratteri
                        </Badge>
                      )}
                    </span>
                  </Form.Label>
                  <Form.Control type="text" placeholder={profile.lastName} />
                </Form.Group>
              </Form>
            </Col>

            <Button className="mt-3">Salva modifiche</Button>
          </Row>
        </Container>
      ) : null}
      <Footer />
    </>
  );
};
export default Profile;
