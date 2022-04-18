import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import OrderAgain from "./contents/sub-contents/OrderAgain";
import DeliveryZone from "./contents/sub-contents/DeliveryZone";
import NotFound from "./NotFound";

export default function Order() {
  return (
    <>
      <h1>This is a order component</h1>
      <ul>
        <li>
          <NavLink to="/order/orderagain">Order again</NavLink>
        </li>
        <li>
          <NavLink to="/order/deliveryzone">Delivery Zone</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="orderagain" element={<OrderAgain />}></Route>
        <Route path="deliveryzone" element={<DeliveryZone />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}
