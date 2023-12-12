import { useEffect, useState } from "react";
import Footer from "./Footer";
import { Badge, Button, Col, Container, Form, Row } from "react-bootstrap";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [showBadgeUsername, setShowBadgeUsername] = useState(false);
  const [showBadgeName, setShowBadgeName] = useState(false);
  const [showBadgeLastName, setShowBadgeLastName] = useState(false);
  const [formData, setFormData] = useState({
    avatar: null,
    email: "",
    password: "",
    username: "",
    name: "",
    lastName: "",
  });
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
      setFormData({
        avatar: data.avatar,
        email: data.email,
        password: data.password,
        username: data.username,
        name: data.name,
        lastName: data.lastName,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfilo();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch(`http://localhost:3001/users/me`, {
        method: "PUT",
        headers: {
          authorization: `Bearer ` + token,
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await resp.json();
      console.log("Profilo aggiornato:", data);
      setProfile(data);
    } catch (error) {
      console.error("Errore durante l'aggiornamento del profilo:", error);
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    setFormData({
      ...formData,
      avatar: file,
    });
  };

  const handleAvatarSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.avatar) {
        console.error("Avatar file is missing.");
        return;
      }

      const formDataForUpload = new FormData();
      formDataForUpload.append("avatar", formData.avatar);

      const resp = await fetch(`http://localhost:3001/users/upload/${profile.id}`, {
        method: "POST",
        headers: {
          authorization: `Bearer ` + token,
        },
        body: formDataForUpload,
      });

      const data = await resp.json();
      console.log("Avatar aggiornato:", data);
      setProfile(data);
    } catch (error) {
      console.error("Errore durante l'aggiornamento dell'avatar:", error);
    }
  };

  return (
    <>
      <NavBar />
      {profile ? (
        <Container>
          <h1>Hey {profile.username} modifica il tuo profilo</h1>
          <Row className="align-items-center">
            <Col>
              {profile ? (
                <img
                  src={profile.avatar}
                  alt=""
                  width={"250px"}
                  height={"250px"}
                  className="rounded-circle"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                "aspetta"
              )}
            </Col>
            <Col>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-0">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder={profile.email}
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="mb-0">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Inserisci una nuova Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
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
                  <Form.Control
                    type="text"
                    placeholder={profile.username}
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
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
                  <Form.Control
                    type="text"
                    placeholder={profile.name}
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
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
                  <Form.Control
                    type="text"
                    placeholder={profile.lastName}
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Button className="mt-3" type="submit">
                  Salva modifiche
                </Button>
              </Form>
              <Form onSubmit={handleAvatarSubmit}>
                <Form.Group>
                  <Form.Label className="mb-1 mt-3">Avatar</Form.Label>
                  <Form.Control type="file" placeholder={profile.avatar} name="avatar" onChange={handleAvatarChange} />
                </Form.Group>
              </Form>
              <Button className="mt-3" onClick={handleAvatarSubmit}>
                Cambia immagine profilo
              </Button>
            </Col>
          </Row>
        </Container>
      ) : null}
      <Footer />
    </>
  );
};
export default Profile;
