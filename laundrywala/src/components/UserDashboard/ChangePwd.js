import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import "./dashboard.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import Profile from "./Profile";

const ChangePwd = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [email, setEmail] = useState("");
  const [currentThumb, setThumb] = useState("");

  // GET CUSTOMER DETAILS
  const id = localStorage.getItem("cID");
  useEffect(() => {
    const fatchCustomer = async () => {
      const { data } = await axios.get(`/api/admin/customers/${id}`);
      setThumb(data.thumb);
      setEmail(data.email);
    };
    fatchCustomer();
  }, [id]);

  const update = (e) => {
    e.preventDefault();
    if (newPassword === conPassword) {
      let updateData = {
        oldPassword,
        newPassword,
        email,
        thumb: currentThumb,
      };
      axios
        .put(`/api/admin/customers/${id}?cthumb=${currentThumb}`, updateData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.data.message === "Something wrong.") {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: response.data.message,
            });
          } else if (response.data.message === "Old password doesn't match.") {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: response.data.message,
            });
          } else {
            Swal.fire({
              icon: "success",
              text: response.data.message,
              showConfirmButton: false,
              timer: 1000,
            });

            setOldPassword("");
            setNewPassword("");
            setConPassword("");
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Update field!",
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        text: "Confirm password doesn't match.",
      });
    }
  };

  if (!localStorage.getItem("cToken")) {
    window.location.href = "/login";
  } else {
    return (
      <>
        <Container>
          <div className="d-flex justify-content-center mb-4">
            <h2 className="text-title head-title mt-5">Settings</h2>
          </div>
          <Row>
            <Col md={4} className="mb-5">
              <Profile />
            </Col>
            <Col md={8}>
              <div className="settings">
                <form method="POST" className="sign-up-form">
                  <h3
                    className="title"
                    style={{ fontFamily: "Handlee, cursive", color: "#1665a0" }}
                  >
                    Change Password
                  </h3>

                  <div className="input-field">
                    <FontAwesomeIcon icon={faUser} className="input-fieldi" />
                    <input
                      type="password"
                      name="old-name"
                      id="old-password"
                      autoComplete="off"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      placeholder="Old password"
                    />
                  </div>

                  <div className="input-field">
                    <FontAwesomeIcon icon={faPhone} className="input-fieldi" />
                    <input
                      type="password"
                      name="new-password"
                      id="new-password"
                      autoComplete="off"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="New password"
                    />
                  </div>
                  <div className="input-field">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="input-fieldi"
                    />
                    <input
                      type="password"
                      name="con-password"
                      id="con-password"
                      autoComplete="off"
                      value={conPassword}
                      onChange={(e) => setConPassword(e.target.value)}
                      placeholder="Confirm password"
                    />
                  </div>

                  <button
                    className="btnz"
                    type="submit"
                    name="signup"
                    id="signup"
                    value="register"
                    onClick={update}
                  >
                    Update
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};

export default ChangePwd;
