import React from "react";
import ForgotPassword from "./contents/ForgotPassword";
import Register from "./contents/Register";
import UserProfile from "./contents/UserProfile";
import { NavLink, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";

export default function Login() {
  return (
    <>
      <h1>This is a login component</h1>
      <ul>
        <li>
          <NavLink to="/login/userprofile">login successfully</NavLink>
        </li>
        <li>
          <NavLink to="/login/register">register</NavLink>
        </li>
        <li>
          <NavLink to="/login/forgotpassword">forgot password</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="userprofile" element={<UserProfile />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}
