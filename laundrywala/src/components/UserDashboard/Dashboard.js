import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import "./dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Profile from "./Profile";
import Swal from "sweetalert2";

const Dashboard = () => {
  // GET CUSTOMER DETAILS
  const id = localStorage.getItem("cID");
  const [customer, setCustomer] = useState({});
  useEffect(() => {
    const fatchCustomer = async () => {
      const { data } = await axios.get(`/api/admin/customers/${id}`);
      setCustomer(data);
    };
    fatchCustomer();
  }, [customer]);

  // GET ORDERS
  const [orders, setOrders] = useState([]);
  const customer_id = localStorage.getItem("cID");
  useEffect(() => {
    const fatchOrders = async () => {
      const { data } = await axios.get(`/api/admin/orders`);
      const fatchCustomerOrders = data.filter((curData) => {
        return curData.customer_id === customer_id;
      });
      setOrders(fatchCustomerOrders);
    };
    fatchOrders();
  }, [orders]);

  // CANCEL ORDER
  const deleteHandler = (id) => {
    Swal.fire({
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/api/admin/orders/${id}`).catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Order deleted field!",
          });
        });
      }
    });
  };

  // ACCEPT ORDER
  const acceptHandler = (id) => {
    Swal.fire({
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Accept",
    }).then((result) => {
      if (result.isConfirmed) {
        let updateData = {
          status: "Delivered",
        };
        axios
          .put(`/api/admin/orders/${id}`, updateData, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            Swal.fire({
              icon: "success",
              text: "Order Accepted.",
              showConfirmButton: false,
              timer: 1000,
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Order update failed!",
            });
          });
      }
    });
  };

  if (!localStorage.getItem("cToken")) {
    window.location.href = "/login";
  } else {
    return (
      <Container>
        <div className="d-flex justify-content-center mb-4">
          <h2 className="text-title head-title mt-5">Order History</h2>
        </div>
        <Row>
          <Col md={4} className="mb-5">
            <Profile />
          </Col>
          <Col md={8}>
            <div className="order">
              <h3>Order Table</h3>
              <div className="order-items">
                <table>
                  <tr>
                    <th>ID</th>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Total_price</th>
                    <th>Payment</th>
                    <th>Status</th>
                    <th>Order_Date</th>
                    <th>Accept_Time</th>
                    <th>Expected_Time</th>
                    <th>Action</th>
                  </tr>
                  {orders.length === 0 ? (
                    <tr>
                      <td className="text-center" colSpan="10">
                        No items found!
                      </td>
                    </tr>
                  ) : (
                    orders.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <Link to={"/customer/dashboard/" + item._id}>
                            {item._id.slice(0, 10)}...
                          </Link>
                        </td>
                        <td>{item.totalItems}</td>
                        <td>{item.total_quantity}</td>
                        <td>৳ {item.total_price}</td>
                        <td>{item.payment}</td>
                        <td>
                          <span
                            className={
                              (item.status === "Ordered" && "btn-order") ||
                              (item.status === "Accepted" && "btn-on-delv") ||
                              (item.status === "On_service" && "btn-on-delv") ||
                              (item.status === "Cancelled" && "btn-cncl") ||
                              (item.status === "Delivered" && "btn-delv")
                            }
                          >
                            {item.status}
                          </span>
                        </td>
                        <td>{moment(item.order_date).format("lll")}</td>
                        <td>
                          {item.accept_time
                            ? moment(item.accept_time).format("lll")
                            : "NaN"}
                        </td>
                        <td>
                          {item.expTime === "0"
                            ? "NaN"
                            : moment(item.expTime).format("lll")}
                        </td>
                        <td>
                          {(item.status === "On_service" ||
                            item.status === "Pickup") && (
                            <Link
                              className="btn-small"
                              onClick={() => acceptHandler(item._id)}
                            >
                              ACCEPT
                            </Link>
                          )}
                          {(item.status === "Delivered" ||
                            item.status === "Cancelled" ||
                            item.status === "Accepted") && (
                            <Link className="btn-small disableLink">
                              ACCEPT
                            </Link>
                          )}
                          {item.status === "Ordered" && (
                            <Link
                              onClick={() => deleteHandler(item._id)}
                              className="btn-small danger-btn"
                            >
                              CANCEL
                            </Link>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </table>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Dashboard;
