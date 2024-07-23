import React, { useEffect, useState } from "react";
// import Modal from 'react-modal';
// import { useReactToPrint } from 'react-to-print';
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

const Settings = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [currentThumb, setThumb] = useState("");

  // GET DELIVERY MAN DETAILS
  const id = localStorage.getItem("dID");
  useEffect(() => {
    const fatchDeliveryMan = async () => {
      const { data } = await axios.get(`/api/admin/delivery-men/${id}`);
      setName(data.name);
      setPhone(data.phone);
      setAddress(data.address);
      setThumb(data.thumb);
    };
    fatchDeliveryMan();
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    let updateData = {
      name,
      phone,
      address,
      thumb: currentThumb,
    };
    axios
      .put(`/api/admin/delivery-men/${id}?cthumb=${currentThumb}`, updateData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        Swal.fire({
          icon: "success",
          text: response.data.message,
          showConfirmButton: false,
          timer: 1000,
        });
        window.location.href = "/delivery";
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Update field!",
        });
      });
  };

  if (!localStorage.getItem("dToken")) {
    window.location.href = "/delivery-login";
  } else {
    return (
      <>
        <Container>
          <div className="d-flex justify-content-center mb-4">
            <h2 className="text-danger head-title mt-5">Settings</h2>
          </div>
          <Row>
            <Col md={4} className="mb-5">
              <Profile />
            </Col>
            <Col md={8}>
              <div className="settings">
                <form className="sign-up-form" onSubmit={submitHandler}>
                  <h3
                    className="title"
                    style={{ fontFamily: "Handlee, cursive", color: "#ff3636" }}
                  >
                    Informations
                  </h3>

                  <div className="input-field">
                    <FontAwesomeIcon icon={faUser} className="input-fieldi" />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="off"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder=" Your Name"
                    />
                  </div>

                  <div className="input-field">
                    <FontAwesomeIcon icon={faPhone} className="input-fieldi" />
                    <input
                      type="phone"
                      name="phone"
                      id="phone"
                      autoComplete="off"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your Phone Number"
                    />
                  </div>
                  <div className="input-field">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="input-fieldi"
                    />
                    <input
                      type="text"
                      name="address"
                      id="address"
                      autoComplete="off"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder=" Your Address"
                    />
                  </div>

                  <button
                    className="btnz"
                    type="submit"
                    name="signup"
                    id="signup"
                    value="register"
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

export default Settings;
