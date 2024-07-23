import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import "./dashboard.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";

const OrderDetails = () => {
  const { id } = useParams();
  // GET SINGLE ORDER
  const [order, setOrder] = useState({});
  const [items, setitems] = useState([]);
  const [deliveryManID, setDeliveryManID] = useState("");
  useEffect(() => {
    const fatchOrder = async () => {
      const { data } = await axios.get(`/api/admin/orders/${id}`);
      setOrder(data);
      setitems(data.items);
      setDeliveryManID(data.delivery_man_id);
    };
    fatchOrder();
  }, [order]);

  // GET DELIVERY MAN DETAILS
  const [deliveryMan, setDeliveryMan] = useState({});
  useEffect(() => {
    const fatchDeliveryMan = async () => {
      const { data } = await axios.get(
        `/api/admin/delivery-men/${deliveryManID}`
      );
      setDeliveryMan(data);
    };
    fatchDeliveryMan();
  }, [order]);

  // CANCEL ORDER
  const deleteHandler = () => {
    Swal.fire({
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/api/admin/orders/${id}`)
          .then((response) => {
            Swal.fire({
              icon: "success",
              text: "Order Celceled.",
              showConfirmButton: false,
              timer: 1000,
            });
            window.location.href = "/customer";
          })
          .catch((error) => {
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
  const acceptHandler = () => {
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

  // Payment Handler
  const paymentHandler = () => {
    Swal.fire({
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Send",
    }).then((result) => {
      if (result.isConfirmed) {
        let updateData = {
          pendingPayment: "Sent",
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
              text: "Payment Sent.",
              showConfirmButton: false,
              timer: 1000,
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Payment failed!",
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
          <h2 className="text-title head-title mt-5">Order Details</h2>
        </div>
        <Row>
          <Col md={12}>
            <div className="order">
              <h3>Ordered Items</h3>
              <div className="order-items">
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Service</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total_price</th>
                  </tr>
                  {items.length === 0 ? (
                    <tr>
                      <td className="text-center" colSpan="13">
                        No items found!
                      </td>
                    </tr>
                  ) : (
                    items.map((val, index) => (
                      <tr key={index}>
                        <td>{val.name}</td>
                        <td>{val.service}</td>
                        <td>{val.category}</td>
                        <td>₹ {val.price}</td>
                        <td>{val.quantity}</td>
                        <td>{val.itemTotal}</td>
                      </tr>
                    ))
                  )}
                  <tr className="bold">
                    <td colSpan="3">Total Items: {order.totalItems}</td>
                    <td colSpan="2">Total Qty: {order.total_quantity}</td>
                    <td>
                      Sub-Total: ₹ {order.total_price - order.deliveryCost}
                    </td>
                  </tr>
                  <tr>
                    <th colSpan="3">Delviery Cost: ₹ {order.deliveryCost}</th>
                    <th colSpan="3">Total Cost: ₹ {order.total_price}</th>
                  </tr>
                </table>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <Row>
              <Col md={6}>
                <div className="order-summury">
                  <h5>Order Status</h5>
                  <ul>
                    <li>
                      <b>Status: </b>
                      <span
                        className={
                          (order.status === "Ordered" && "btn-order") ||
                          (order.status === "Accepted" && "btn-on-delv") ||
                          (order.status === "On_service" && "btn-on-delv") ||
                          (order.status === "Cancelled" && "btn-cncl") ||
                          (order.status === "Delivered" && "btn-delv")
                        }
                      >
                        {order.status}
                      </span>
                    </li>
                    <li>
                      <b>Payment: </b> {order.payment + " "}
                      {order.payment === "Cash on delivery" && (
                        <>
                          {order.pendingPayment === "Yes" ? (
                            <b style={{ color: "red" }}>(Pending)</b>
                          ) : (
                            <b style={{ color: "Lime" }}>
                              ({order.pendingPayment})
                            </b>
                          )}
                        </>
                      )}
                    </li>
                    <li>
                      <b>Order Date: </b>
                      {order.order_date
                        ? moment(order.order_date).format("lll")
                        : "NaN"}
                    </li>
                    <li>
                      <b>Pickup Date: </b> {order.picupTime}
                    </li>
                    <li>
                      <b>Accept Time: </b>
                      {order.accept_time
                        ? moment(order.accept_time).format("lll")
                        : "NaN"}
                    </li>
                    <li>
                      <b>Expected Time: </b>
                      {order.expTime === "0"
                        ? "NaN"
                        : moment(order.expTime).format("lll")}
                    </li>
                  </ul>
                  {(order.pendingPayment !== "Paid" &&
                    order.status === "On_service") ||
                  order.status === "Accepted" ||
                  order.status === "Delivered" ? (
                    <Link className="btn-small disableLink">ACCEPT</Link>
                  ) : (
                    <Link onClick={() => acceptHandler()} className="btn-small">
                      ACCEPT
                    </Link>
                  )}{" "}
                  {order.pendingPayment === "Yes" &&
                    order.status === "On_service" && (
                      <Link
                        onClick={() => paymentHandler()}
                        className="btn-small"
                      >
                        Bill Pay
                      </Link>
                    )}{" "}
                  {order.status === "Ordered" ? (
                    <Link onClick={() => deleteHandler()} className="btn-small">
                      CANCEL
                    </Link>
                  ) : (
                    <Link className="btn-small disableLink">CANCEL</Link>
                  )}
                </div>
              </Col>
              <Col md={6}>
                {order.delivery_man_id !== "NaN" && (
                  <div className="order-summury">
                    <h5>Delivery Man</h5>
                    <ul>
                      <li className="delivery-man-details">
                        <img
                          src={"/delivery-men/" + deliveryMan.thumb}
                          alt={deliveryMan.name}
                        />
                      </li>
                      <li title="Police Verified">
                        <b>Name: </b> {deliveryMan.name}
                      </li>
                      <li>
                        <b>Phone: </b>
                        <a href={"tel:" + deliveryMan.phone}>
                          {deliveryMan.phone}
                        </a>
                      </li>
                      <li>
                        <b>Email: </b>
                        <a href={"mailto:" + deliveryMan.email}>
                          {deliveryMan.email}
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </Col>
            </Row>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    );
  }
};

export default OrderDetails;
