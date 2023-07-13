import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
// import { useLocation } from 'react-router';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import Spinner from "./spinner/Spinner";
import "./Display.scss";


function Display() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const location = useLocation()
  const navigate = useNavigate();

  const getData = () => {
    setLoading(true);
    axios
      .get("https://64aed2b3c85640541d4dc4ab.mockapi.io/crud")

      .then((res) => {
        setData(res.data);
      })
      .then(() => [setLoading(false)]);
  };

  useEffect(() => {
    getData();
  }, []);

  const goToCreate = () => {
    navigate("/");
  };
  const handleDelete = (idx) => {
    //  alert('handleDelete')

    setLoading(true);
    axios
      .delete(`https://64aed2b3c85640541d4dc4ab.mockapi.io/crud/${idx}`)
      .then(() => {
        setLoading(false);
      })
      .then(() => {
        getData();
      });
  };

  const handleEdit = (id, userName, email, mobile) => {
    localStorage.setItem("id", id);
    localStorage.setItem("userName", userName);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);
    navigate("/update");
  };

  return (
    <div className="display">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1>Details</h1>
          <Button className="submit_btn mt-2" onClick={goToCreate}>
            Go to Create
          </Button>
          <Table className="table_res" striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th style={{ textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, idx) => {
                  return (
                    <>
                      <tr>
                        <td key={item.id}>{idx+1}</td>
                        <td>{item.userName}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>
                          {" "}
                          <Button
                            onClick={() =>
                              handleEdit(
                                item.id,
                                item.userName,
                                item.email,
                                item.mobile
                              )
                            }
                          >
                            Edit
                          </Button>{" "}
                          <Button
                            variant="danger"
                            onClick={() => handleDelete(item.id)}
                          >
                            Delete
                          </Button>{" "}
                        </td>
                        <td></td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
}

export default Display;
