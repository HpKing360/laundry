import React, { useEffect, useState } from "react";
import "./dashboard.css";
import userImage from "../../images/user.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  // GET DELIVERY MAN DETAILS
  const id = localStorage.getItem("dID");
  const [deliveryMan, setDeliveryMan] = useState({});
  useEffect(() => {
    const fatchDeliveryMan = async () => {
      const { data } = await axios.get(`/api/admin/delivery-men/${id}`);
      setDeliveryMan(data);
    };
    fatchDeliveryMan();
  }, [deliveryMan]);

  // DELIVERY LOGOUT
  const deliveryLogout = () => {
    localStorage.removeItem("dToken");
    localStorage.removeItem("dID");
    window.location.href = "/";
  };

  return (
    <>
      <div className="user-profile">
        {!deliveryMan.thumb ? (
          <img src={userImage} alt="" />
        ) : (
          <img src={"/delivery-men/" + deliveryMan.thumb} alt="" />
        )}
        <div className="user-details">
          <p>
            <i className="fa fa-fw fa-user"></i> {deliveryMan.name}
          </p>
          <p>
            <i className="fa fa-fw fa-phone"></i> {deliveryMan.phone}
          </p>
          <p>
            <i className="fa fa-fw fa-envelope"></i> {deliveryMan.email}
          </p>
          <p>
            <i className="fa fa-fw fa-location-dot"></i> {deliveryMan.address}
          </p>
          <Link to="/delivery/settings">Setting</Link>{" "}
          <Link to="/delivery/profile-picture">Picture</Link>{" "}
          <Link to="/delivery/password">Password</Link>{" "}
          <Link
            onClick={() => {
              deliveryLogout();
            }}
          >
            Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
