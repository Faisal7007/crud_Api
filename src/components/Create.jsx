import React, { useEffect } from "react";
import { useState } from "react";
import "./Create.scss";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import Spinner from "./spinner/Spinner";

function Create() {
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const display = () => {
    navigate("/display");
  };

  const handleName = (e) => {
    setUserName(e.target.value);
  };

  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    axios
      .post("https://64aed2b3c85640541d4dc4ab.mockapi.io/crud", {
        userName: userName,
        email: email,
        mobile: mobile,
      })
      .then(() => {
        setLoading(false);
      })
      .then(() => {
        navigate("/display");
      });
  };

  return (
    <Container fluid className="main_screen">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Row className="row">
            <h1 className="title">Enter User Details</h1>
            <Col className="column">
              <input
                type="text"
                value={userName}
                onChange={handleName}
                placeholder="Enter Username"
              />
              <input
                type="email"
                value={email}
                onChange={handleEmail}
                placeholder="Enter Email"
              />
              <input
                type="text"
                value={mobile}
                onChange={handleMobile}
                placeholder="Enter Mobile Number"
              />

              <Button className="submit_btn" onClick={handleSubmit}>
                Submit
              </Button>

              <Button className="submit_btn mt-2" onClick={display}>
                Go to Display
              </Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Create;
