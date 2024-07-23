import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Title from "../common/title/Title";
import "./order.css";
import moment from "moment";
import Swal from "sweetalert2";

const SingleOrder = () => {
  const { id } = useParams();
  const [status, setStatus] = useState("");
  const [expDate, setExpDate] = useState("");
  const [expTime, setExpTime] = useState("");
  const [deliveryManId, setDeliveryManId] = useState("");
  const [deliveryManName, setDeliveryManName] = useState("");
  // GET SINGLE ORDER
  const [order, setOrder] = useState({});
  const [items, setitems] = useState([]);
  useEffect(() => {
    const fatchOrder = async () => {
      const { data } = await axios.get(`/api/admin/orders/${id}`);
      setOrder(data);
      setitems(data.items);
      setStatus(data.status);
      setDeliveryManId(data.delivery_man_id);
      setDeliveryManName(data.delivery_man_name);
      setExpTime(data.expTime);
    };
    fatchOrder();
  }, [id]);

  // GET ALL DELIVERY MAN
  const [selectMan, setSelectMan] = useState([]);
  useEffect(() => {
    const fatchSelectMan = async () => {
      const { data } = await axios.get("/api/admin/delivery-men");
      const freeDeliveryMan = data.filter((curData) => {
        return curData.pendingOrders < 3;
      });
      setSelectMan(freeDeliveryMan);
    };
    fatchSelectMan();
  }, []);

  // GEL SINGLE DELIVERY MAN
  const deliveryMan = (deliveryManId) => {
    if (deliveryManId) {
      setDeliveryManId(deliveryManId);
      const fatchDeliveryMen = async () => {
        const { data } = await axios.get(
          `/api/admin/delivery-men/${deliveryManId}`
        );
        setDeliveryManName(data.name);
      };
      fatchDeliveryMen();
    }
  };

  // UPDATE ORDER
  const submitHandler = (e) => {
    e.preventDefault();
    let updateData = {
      status,
      accept_time: new Date(),
      expTime: expDate + "," + expTime,
      delivery_man_id: deliveryManId,
      delivery_man_name: deliveryManName,
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
          text: "Order updated successfull.",
          showConfirmButton: false,
          timer: 500,
        });
        window.location.href = "/orders";
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Order update field!",
        });
      });
  };

  // DELETE ORDER
  const deleteHandler = () => {
    Swal.fire({
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/api/admin/orders/${id}`)
          .then((response) => {
            Swal.fire({
              icon: "success",
              text: "Order deleted.",
              showConfirmButton: false,
              timer: 500,
            });
            window.location.href = "/orders";
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

  return (
    <>
      <section className="order single-order content">
        <Title title="Orders Details" />
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
                  <td>৳ {val.price}</td>
                  <td>{val.quantity}</td>
                  <td>{val.itemTotal}</td>
                </tr>
              ))
            )}
            <tr>
              <th colSpan="3">Total Items: {order.totalItems}</th>
              <th>Delviery Cost: {order.deliveryCost}</th>
              <th>Total Qty: {order.total_quantity}</th>
              <th>₹ {order.total_price}</th>
            </tr>
          </table>
        </div>
        <form onSubmit={submitHandler}>
          <div className="order-summury grid-3">
            <div>
              <h5>Delivery Details</h5>
              <ul>
                <li>
                  <b>Name</b> :{" "}
                  <Link to={"/customers/" + order.customer_id}>
                    {order.customer_name}
                  </Link>
                </li>
                <li>
                  <b>Phone</b> : {order.phone}
                </li>
                <li>
                  <b>Email</b> : {order.email}
                </li>
                <li>
                  <b>Address</b> : {order.address}
                </li>
              </ul>
            </div>
            <div>
              <h5>Order Status</h5>
              <ul>
                <li>
                  <b>Status</b> :{" "}
                  <span className="btn-small">{order.status}</span>
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
                  <b>Branch</b> : {order.branch}
                </li>
                <li>
                  <b>Order Date</b> : {moment(order.date).format("lll")}
                </li>
                <li>
                  <b>Expected Time</b> :{" "}
                  {order.expTime === "0"
                    ? "NaN"
                    : moment(order.expTime).format("lll")}
                </li>
                <li>
                  <b>Delivery Man</b> :{" "}
                  {order.delivery_man_name === "NaN" ? (
                    "NaN"
                  ) : (
                    <Link to={"/delivery-men/" + order.delivery_man_id}>
                      {order.delivery_man_name}
                    </Link>
                  )}
                </li>
              </ul>
            </div>
            <div>
              <h5>Order Action</h5>
              <ul>
                <li>
                  <b>Expected Time</b> :{" "}
                  <input
                    type="date"
                    value={expDate}
                    onChange={(e) => setExpDate(e.target.value)}
                    className="form-control"
                  />
                  <input
                    type="time"
                    value={expTime}
                    onChange={(e) => setExpTime(e.target.value)}
                    className="form-control"
                  />
                </li>
                <li>
                  <b>Delivery Man</b> :{" "}
                  <select
                    name="delivery"
                    onChange={(e) => {
                      deliveryMan(e.target.value);
                    }}
                    className="form-control"
                    required
                  >
                    <option value="" selected>
                      Select
                    </option>
                    {selectMan.map((item) => (
                      <option
                        value={item._id}
                        selected={order.delivery_man_id === item._id}
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                </li>
                <li>
                  <b>Order Status</b> :{" "}
                  <select
                    name="status"
                    onChange={(e) => setStatus(e.target.value)}
                    id=""
                    className="form-control"
                  >
                    <option
                      value="Ordered"
                      selected={order.status === "Ordered"}
                    >
                      Ordered
                    </option>
                    <option
                      value="Accepted"
                      selected={order.status === "Accepted"}
                    >
                      Accept
                    </option>
                    <option
                      value="On_service"
                      selected={order.status === "On_service"}
                    >
                      On Service
                    </option>
                    <option
                      value="Delivered"
                      selected={order.status === "Delivered"}
                    >
                      Delivered
                    </option>
                    <option
                      value="Cancelled"
                      selected={order.status === "Cancelled"}
                    >
                      Cancelled
                    </option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
          <div className="btn-box text-center">
            <button className="btn-primary">Update</button>
            <Link onClick={() => deleteHandler()} className="btn-delete">
              Delete
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default SingleOrder;
