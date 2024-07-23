import React from "react";
import { Route, Routes } from "react-router-dom";
import Customer from "../customer/Customer";
import Dashboard from "../dashboard/Dashboard";
import ErrorPage from "../error-page/ErrorPage";
import Order from "../order/Order";
import ChangeDetails from "../profile/ChangeDetails";
import ChangePassword from "../profile/ChangePassword";
import ChangeProfilePic from "../profile/ChangeProfilePic";
import Profile from "../profile/Profile";
import NewUser from "../user/NewUser";
import User from "../user/User";
import Login from "../login/Login";
import SingleOrder from "../order/SingleOrder";
import SingleCustomer from "../customer/SingleCustomer";
import DeliveryMen from "../deliverymen/DeliveryMen";
import SingleDeliveryMen from "../deliverymen/SingleDeliveryMen";
import NewMan from "../deliverymen/NewMan";
import CompleteOrders from "../order/CompleteOrders";
import PendingOrders from "../order/PendingOrders";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/customers/:id" element={<SingleCustomer />} />
        <Route path="/users" element={<User />} />
        <Route path="/new-user" element={<NewUser />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/orders/:id" element={<SingleOrder />} />
        <Route path="/complete-orders" element={<CompleteOrders />} />
        <Route path="/pending-orders" element={<PendingOrders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/change-details" element={<ChangeDetails />} />
        <Route path="/change-profile-pic" element={<ChangeProfilePic />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/delivery-men" element={<DeliveryMen />} />
        <Route path="/new-man" element={<NewMan />} />
        <Route path="/delivery-men/:id" element={<SingleDeliveryMen />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default Router;
