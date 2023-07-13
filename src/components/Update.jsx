import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import axios from "axios";
import Spinner from "./spinner/Spinner";

function Update() {
  const [id, setId] = useState("");
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setUserName(localStorage.getItem("userName"));
    setEmail(localStorage.getItem("email"));
    setMobile(localStorage.getItem("mobile"));
  }, []);

  const handleName = (e) => {
    setUserName(e.target.value);
  };

  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleUpdate = () => {
    setLoading(true);
    axios
      .put(`https://64aed2b3c85640541d4dc4ab.mockapi.io/crud/${id}`, {
        userName: userName,
        email: email,
        mobile: mobile,
      })
      .then(() => {
        navigate("/display");
      })
      .then(() => {
        setLoading(false);
      });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Container fluid className="main_screen">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Row>
            <h1 className="title">Update</h1>
            <Col className="column">
              <input
                type="text"
                value={userName}
                onChange={handleName}
                placeholder="Enter Username"
              />
              <input
                type="text"
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

              <Button className="submit_btn mb-3" onClick={handleUpdate}>
                Update
              </Button>
              <Button className="submit_btn" onClick={handleGoBack}>
                Go Back
              </Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Update;
