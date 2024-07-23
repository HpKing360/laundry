import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../common/title/Title";
import "./order.css";
import axios from "axios";
import moment from "moment";

const PendingOrders = () => {
  // GET COMPLETED ORDER
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fatchOrders = async () => {
      const { data } = await axios.get("/api/admin/orders"
      );
      const completeOrder = data.filter((curData) => {
        return curData.status.toLowerCase() !== "delivered";
      });
      setOrders(completeOrder);
    };
    fatchOrders();
  }, [orders]);

  return (
    <>
      <section className="order content">
        <Title title="Pending Orders" />
        <div className="order-items">
          <table>
            <tr>
              <th>Customer</th>
              <th>Order_id</th>
              <th>Items</th>
              <th>Qty</th>
              <th>Total_price</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Order_date</th>
              <th>Exp_Time</th>
              <th>Delivery_man</th>
            </tr>
            {orders.length === 0 ? (
              <tr>
                <td className="text-center" colSpan="13">
                  No items found!
                </td>
              </tr>
            ) : (
              orders.map((item) => (
                <tr>
                  <td>
                    <Link to={"/customers/" + item.customer_id}>
                      {item.customer_name}
                    </Link>
                  </td>
                  <td>
                    <Link to={"/orders/" + item._id}>{item._id}</Link>
                  </td>
                  <td>{item.total_foods}</td>
                  <td>{item.total_quantity}</td>
                  <td>₹ {item.total_price}</td>
                  <td>{item.payment}</td>
                  <td>
                    <span
                      className="btn-small"
                    >
                      {item.status}
                    </span>
                  </td>
                  <td>{moment(item.order_date).format("lll")}</td>
                  <td>
                  {item.expTime === "0" ? "NaN"
                        : moment(item.expTime).format("lll")}
                  </td>
                  <td>
                    {item.delivery_man_name === "NaN" ? (
                      "Nan"
                    ) : (
                      <Link to={"/delivery-men/" + item.delivery_man_id}>
                        {item.delivery_man_name}
                      </Link>
                    )}
                  </td>
                </tr>
              ))
            )}
          </table>
        </div>
      </section>
    </>
  );
};

export default PendingOrders;
