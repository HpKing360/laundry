import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'; // Make sure to import the CSS file

export default function Navbar() {
  const customer = localStorage.getItem("cToken");
  const delivery = localStorage.getItem("dToken");

  // CUSTOMER LOGOUT
  const customerLogout = () => {
    localStorage.removeItem("cToken");
    localStorage.removeItem("cID");
    localStorage.removeItem("cName");
    window.location.href = "/";
  };

  // DELIVERY LOGOUT
  const deliveryLogout = () => {
    localStorage.removeItem("dToken");
    localStorage.removeItem("dID");
    window.location.href = "/";
  };

  return (
    <div className="navbar-container">
      <header className="navbar-header">
        <nav className="navbar navbar-expand-sm fixed-top">
          <div className="navbar-brand">
            <Link to="/">
              <img
                src={"default/logo.png"}
                alt={"Spin Cycle"}
                className="navbar-logo"
              />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            id="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <i className="fa fa-fw fa-home"></i> Home
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/services">
                  <i className="fa-solid fa-gear"></i> Services
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/order">
                  <i className="fa-solid fa-cart-shopping"></i> Order
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/map">
                  <i className="fa-solid fa-location-dot"></i> Maps
                </NavLink>
              </li>
              {!customer ? (
                <li className="nav-item mx-2">
                  <NavLink className="nav-link" to="/login">
                    <i className="fa-solid fa-right-to-bracket"></i> Sign In
                  </NavLink>
                </li>
              ) : (
                <>
                  <li className="nav-item mx-2">
                    <NavLink className="nav-link" to="/customer">
                      <i className="fa-brands fa-dashcube"></i> Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item mx-2" onClick={customerLogout}>
                    <NavLink className="nav-link" to="#">
                      <i className="fa-solid fa-right-from-bracket"></i> Logout
                    </NavLink>
                  </li>
                </>
              )}
              {delivery && (
                <>
                  <li className="nav-item mx-2">
                    <NavLink className="nav-link" to="/delivery">
                      <i className="fa-brands fa-dashcube"></i> Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item mx-2" onClick={deliveryLogout}>
                    <NavLink className="nav-link" to="#">
                      <i className="fa-solid fa-right-from-bracket"></i> Logout
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
