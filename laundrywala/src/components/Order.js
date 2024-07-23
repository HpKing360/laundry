import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Col, Container, FormGroup, Input, Label, Row } from "reactstrap";
import { useCart } from "react-use-cart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import axios from "axios";

const Order = () => {
  // ADD TO CART
  const {
    isEmpty,
    cartTotal,
    totalItems,
    items,
    totalUniqueItems,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  const claerCart = () => {
    Swal.fire({
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        emptyCart();
      }
    });
  };

  // PLACE ORDER
  const customer_id = localStorage.getItem("cID");
  const customer_name = localStorage.getItem("cName");
  const [picupDate, setPicupDate] = useState("");
  const [picupTime, setPicupTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [toDoor, setToDoor] = useState("");
  const [road, setRoad] = useState("");
  const [flatName, setFlatName] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");

  var pendingPayment;
  if (payment === "Cash on delivery") {
    pendingPayment = "Yes";
  } else {
    pendingPayment = "No";
  }

  var deliveryCost = 0;

  if (cartTotal < 1000) {
    deliveryCost = 40;
  } else {
    deliveryCost = 0;
  }

  console.log(picupDate + "," + picupTime);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!isEmpty) {
      if (customer_id) {
        let data = {
          customer_id,
          customer_name,
          items,
          picupTime: picupDate + "," + picupTime,
          email,
          phone,
          branch,
          name,
          address: toDoor + "," + road + "," + flatName + "," + address,
          payment,
          pendingPayment,
          totalItems: totalUniqueItems,
          total_quantity: totalItems,
          deliveryCost: deliveryCost,
          total_price: cartTotal + deliveryCost,
        };
        axios
          .post(`/api/admin/orders`, data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            Swal.fire({
              icon: "success",
              text: response.data.message,
              showConfirmButton: false,
              timer: 500,
            });
            emptyCart();
            window.location.href = "/customer";
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something wrong.",
            });
          });
      } else {
        window.location.href = "/login";
      }
    } else {
      Swal.fire({
        icon: "error",
        text: "Please, select any food.",
      });
    }
  };

  return (
    <section>
      <Container>
        <div className="row justify-content-between py-3 mt-5 confirm-order">
          <div className="col-md-8">
            <h2 className="text-title head-title">Confirm Order</h2>
          </div>
        </div>
        <Row>
          <Col md={7}>
            <h4 className="px-2 mb-3 text-title">
              Edit Pickup & Delivery Details
            </h4>
            <hr />

            <div className="address-details px-2 mb-3">
              <form className="py-2" onSubmit={submitHandler}>
                <div className="px-2 mb-3">
                  <h5>Schedule</h5>
                  <span className="from-text ">
                    Expert will arrive at your given address within 30 minutes
                  </span>
                </div>

                <TextField
                  name="getDate"
                  id="date"
                  label="Pickup Date"
                  type="date"
                  className="px-2 mb-3"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={picupDate}
                  onChange={(e) => setPicupDate(e.target.value)}
                />

                <TextField
                  name="getTime"
                  id="time"
                  label="Pickup Time"
                  type="time"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                  value={picupTime}
                  onChange={(e) => setPicupTime(e.target.value)}
                />

                <FormGroup>
                  <select
                    name="fullName"
                    className="form-control my-3"
                    placeholder="Full Name"
                    onChange={(e) => {
                      setBranch(e.target.value);
                    }}
                  >
                    <option value="">Select Branch</option>
                    <option value="Tumble Dry">Tumble Dry</option>
                    <option value="Laundrokart">Laundrokart</option>
                    <option value="Clean Genie Express">Clean Genie Express</option>
                    <option value="Coin Laundromart">Coin Laundromart</option>
                    <option value="One wash">One wash</option>
                    <option value="A1 laundry">A1 laundry</option>
                    <option value="Instawash">Instawash</option>
                  </select>
                </FormGroup>

                <div>
                  <h5>Contact Person</h5>
                  <span className="from-text">
                    Expert will arrive at the address given below
                  </span>
                </div>

                <FormGroup>
                  <input
                    name="fullName"
                    className="form-control my-3"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <input
                    name="email"
                    className="form-control my-3"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <input
                    name="phone"
                    type="phone"
                    className="form-control my-3"
                    placeholder="Mobile Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </FormGroup>

                <div className="mt-4">
                  <h5>Address</h5>
                  <span className="from-text">
                    Expert will arrive at the address given below
                  </span>
                </div>

                <FormGroup>
                  <input
                    name="toDoor"
                    className="form-control my-3"
                    placeholder="Delivery To Door"
                    value={toDoor}
                    onChange={(e) => setToDoor(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <input
                    name="road"
                    className="form-control my-3"
                    placeholder="Road Name"
                    value={road}
                    onChange={(e) => setRoad(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <input
                    name="flat"
                    className="form-control my-3"
                    placeholder="Flat Name, Room Number or Floor"
                    value={flatName}
                    onChange={(e) => setFlatName(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <textarea
                    name="address"
                    placeholder="Address"
                    className="form-control my-3"
                    cols="30"
                    rows="2"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </FormGroup>

                <div className="mt-4 mb-3">
                  <h5>Payment Method</h5>
                  <span className="from-text">
                    Expert will collect your payment after delivery your order
                  </span>
                </div>

                <FormGroup check className="form-check-radio " inline>
                  <Label check>
                    <Input
                      id="inlineRadio1"
                      name="payment"
                      type="radio"
                      value="Cash on delivery"
                      onChange={(e) => setPayment(e.target.value)}
                      required
                    />
                    Cash on delivery <span className="form-check-sign " />
                  </Label>
                  <FormGroup
                    check
                    className="form-check-radio "
                    inline
                  ></FormGroup>
                  <Label check>
                    <Input
                      id="inlineRadio1"
                      name="payment"
                      type="radio"
                      value="Online payment"
                      onChange={(e) => setPayment(e.target.value)}
                      required
                    />
                    Online payment(UPI/Debit Card){" "}
                    <span className="form-check-sign" />
                  </Label>
                </FormGroup>

                <div className="form-group d-flex justify-content-center mt-4">
                  <button className="btn btn-primary " type="submit">
                    <i className="now-ui-icons ui-1_check" />
                    <span className="ml-2">Confirm Order</span>
                  </button>
                </div>
              </form>
            </div>
          </Col>
          <Col md={5} className="mb-5">
            <table className="cartTable">
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
              {isEmpty ? (
                <tr>
                  <td colSpan="6">Your Cart is Empty.</td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr>
                    <td>{item.name.slice(0, 20)}...</td>
                    <td>₹ {item.price}</td>
                    <td>
                      <button
                        className="btn-primary"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>{" "}
                      <span className="item-qty">{item.quantity}</span>{" "}
                      <button
                        className="btn-primary"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </td>
                    <td>₹ {item.itemTotal}</td>
                    <td>
                      <Link
                        onClick={() => removeItem(item.id)}
                        className="btn-danger clear-one"
                      >
                        X
                      </Link>
                    </td>
                  </tr>
                ))
              )}
              {!isEmpty && (
                <>
                  <tr className="bold">
                    <td colSpan="2">Sub-Total</td>
                    <td>{totalItems}</td>
                    <td>₹ {cartTotal}</td>
                    <td>
                      <Link
                        className="btn-danger clear-all"
                        onClick={() => claerCart()}
                      >
                        Clear All
                      </Link>
                    </td>
                  </tr>
                  <tr className="bold">
                    <td colSpan="2">Delivery Cost</td>
                    <td>₹{deliveryCost}</td>
                    <td>Total</td>
                    <td>₹ {cartTotal && cartTotal + deliveryCost}</td>
                    <td></td>
                  </tr>
                </>
              )}
              <tr>
                <td colSpan={5}>
                  <span class="nb">(Free delivery cost for up to ₹1000)</span>
                </td>
              </tr>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Order;
