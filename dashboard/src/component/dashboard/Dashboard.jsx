import React from "react";
import Title from "../common/title/Title";
import CartItems from "./CartItems";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      <section className="dashboard content">
        <Title title="Dashboard" />
        <div className="dashboard-wrapper">
          <CartItems />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
