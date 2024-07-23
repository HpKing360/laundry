import {
  faEnvelope,
  faLock,
  faLockOpen,
  faUser,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Swal from "sweetalert2";
import loginPic from "../images/log.svg";
import registerPic from "../images/register.svg";
import axios from "axios";

const Login = () => {
  const [toggled, setToggled] = useState(false);
  const buttonClass = toggled ? "containerz sign-up-mode" : "containerz";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const registration = (e) => {
    e.preventDefault();
    if (password === conPassword) {
      let data = {
        name,
        email,
        password,
        phone,
        address,
      };
      axios
        .post(`/api/admin/customers`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((user) => {
          if (user.data.message === "Registration successfull.") {
            // Set token
            localStorage.setItem("cToken", user.data.token);
            localStorage.setItem("cID", user.data.id);
            localStorage.setItem("cName", user.data.name);
            Swal.fire({
              icon: "success",
              text: user.data.message,
              showConfirmButton: false,
              timer: 500,
            });
            window.location.href = "/customer";
          } else if (user.data.message === "Already registered.") {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: user.data.message,
            });
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something wrong.",
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        text: "Confirm password doesn't match.",
      });
    }
  };

  // Login part
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");

  const login = (e) => {
    e.preventDefault();
    let data = {
      email: loginEmail,
      password: loginPass,
    };
    axios
      .post(`/api/admin/customerlogin/`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((user) => {
        if (user.data.message === "Email doesn't exist.") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email doesn't exist.",
          });
        } else if (user.data.message === "Password doesn't match.") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password doesn't match.",
          });
        } else {
          // Set token
          localStorage.setItem("cToken", user.data.token);
          localStorage.setItem("cID", user.data.id);
          localStorage.setItem("cName", user.data.name);
          window.location.href = "/customer";
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something wrong.",
        });
      });
  };

  return (
    <section id="Amazing-Login-Page">
      <div className={buttonClass}>
        <div className="forms-containerz">
          <div className="signin-signup">
            <form method="POST" className="sign-in-form">
              <h2
                className="title"
                style={{ fontFamily: "Handlee, cursive", color: "#1665a0" }}
              >
                Sign in
              </h2>

              <div className="input-field">
                <FontAwesomeIcon icon={faEnvelope} className="input-fieldi" />
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder=" Your Email"
                />
              </div>

              <div className="input-field">
                <FontAwesomeIcon icon={faLock} className="input-fieldi" />

                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  value={loginPass}
                  onChange={(e) => setLoginPass(e.target.value)}
                  placeholder="Password"
                />
              </div>

              <button
                className="btnz"
                type="submit"
                name="signin"
                id="signin"
                value="Log In"
                onClick={login}
              >
                SIGN IN
              </button>

              <p className="forget-text">Forgot your password?</p>

              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <button className="social-icon">
                  <span className="mx-2">Sign in with Google</span>
                </button>
                <button className="social-icon">
                  <span className="mx-2">Sign in with Facebook </span>
                </button>
              </div>
            </form>

            {/* signUp form */}

            <form method="POST" className="sign-up-form">
              <h2
                className="title"
                style={{ fontFamily: "Handlee, cursive", color: "#1665a0" }}
              >
                Sign up
              </h2>

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
                <FontAwesomeIcon icon={faEnvelope} className="input-fieldi" />
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=" Your Email"
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
                <FontAwesomeIcon icon={faLock} className="input-fieldi" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <div className="input-field">
                <FontAwesomeIcon icon={faLockOpen} className="input-fieldi" />
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  autoComplete="off"
                  value={conPassword}
                  onChange={(e) => setConPassword(e.target.value)}
                  placeholder="Confirm Password"
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
                onClick={registration}
              >
                SIGN UP
              </button>
              {/* <div className='form-group form-button'>	
                             <input type="submit" name="signup" id="signup"
							value="register" onClick={PostData} />	
							</div> */}
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                To get our best Laundry Services In your Door Step Sign Up here.
              </p>
              <button
                className="btnz transparent"
                onClick={() => setToggled(!toggled)}
                id="sign-up-btn"
              >
                Sign up
              </button>
            </div>
            <img src={loginPic} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3> One of us ?</h3>
              <p>
                Already Have an Account ? Login to enjoy our Laundry Services.
              </p>
              <button
                className="btnz transparent"
                onClick={() => setToggled(!toggled)}
                id="sign-in-btn"
              >
                Sign in
              </button>
            </div>
            <img src={registerPic} className="image" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;