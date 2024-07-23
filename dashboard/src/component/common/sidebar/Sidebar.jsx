import React from "react";
import { NavLink, Link } from "react-router-dom";
import navLinks from "../../../assets/data/navLinks";
import "./sidebar.css";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const logout = () => {
    localStorage.removeItem("aToken");
    localStorage.removeItem("aID");
    window.location.href = "http://localhost:3000/";
  };

  return (
    <>
      <section className="sidebar">
        <div className="sidebar-top">
          <div className="img">
            {/* <h3>LAUNDRYWALA</h3> */}
            <Link to="/" title="Home">
              <img
                src={"default/logo-dashboard.png"}
                alt={"default/logo-dashboard.png"}
              />
            </Link>
          </div>
        </div>
        <div className="sidebar-content">
          <div className="sidebar-menu">
            <ul className="nav-list">
              {navLinks.map((item, index) => (
                <SidebarItem key={index} item={item} />
              ))}
              <li className="nav-item">
                <NavLink
                  onClick={() => {
                    logout();
                  }}
                  className="nav-link sidebar-item"
                >
                  <i className="ri-logout-circle-r-line"></i> Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
