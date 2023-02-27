import React, { useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState(null);
  
    function sendLoginRequest() {
      setErrorMsg("");
      const reqBody = {
        "email": username,
        "password": password
      };
  
      fetch("http://127.0.0.1:8000/api/login/", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify(reqBody),
      })
        .then((response) => {
          if (response.status === 200){
            response.json().then(
                (result) => {
                    localStorage.setItem("token",result.token)
                    localStorage.setItem("update_token",result.update_token)
                });
            navigate("/")
        } else if (response.status === 401 || response.status === 403) {
            setErrorMsg("Invalid username or password");
          } else {
            setErrorMsg(
              "Something went wrong, try again later or reach out to jchen72503@gmail.com"
            );
          }
        })
    }


    return (
      <>
        <Container>
          <Row className="justify-content-center mt-5">
            <Col md="8" lg="6">
              <Form.Group className="mb-3" controlId="username">
                <Form.Label className="fs-4">Username</Form.Label>
                <Form.Control
                  type="email"
                  size="lg"
                  placeholder="joe@gmail.com"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
  
          <Row className="justify-content-center">
            <Col md="8" lg="6">
              <Form.Group className="mb-3" controlId="password">
                <Form.Label className="fs-4">Password</Form.Label>
                <Form.Control
                  type="password"
                  size="lg"
                  placeholder="Type in your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          {errorMsg ? (
            <Row className="justify-content-center mb-4">
              <Col md="8" lg="6">
                <div className="" style={{ color: "red", fontWeight: "bold" }}>
                  {errorMsg}
                </div>
              </Col>
            </Row>
          ) : (
            <></>
          )}
          <Row className="justify-content-center">
            <Col
              md="8"
              lg="6"
              className="mt-2 d-flex flex-column gap-5 flex-md-row justify-content-md-between"
            >
              <Button
                id="submit"
                type="button"
                size="lg"
                onClick={() => sendLoginRequest()}
              >
                Login
              </Button>
              <Button
                variant="secondary"
                type="button"
                size="lg"
                onClick={() => {
                  navigate("/");
                }}
              >
                Exit
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  
  export default Login;