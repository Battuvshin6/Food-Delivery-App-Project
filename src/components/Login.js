import React from "react";
// import ForgotPassword from "./contents/ForgotPassword";
// import Register from "./contents/Register";
// import UserProfile from "./contents/UserProfile";
// import { Route, Routes } from "react-router-dom";
// import NotFound from "./NotFound";
export default function Login() {
  return (
    <>
      <div className="login-section">
        <h1>
          <img src="/images/line.svg" alt="" />
          НЭВТРЭХ
        </h1>
        <form>
          <label htmlFor="mail">И-мэйл</label>
          <input type="text" name="mail" id="mail" />
          <label htmlFor="pwd">Нууц үг</label>
          <input type="password" name="pwd" id="pwd" />
        </form>
        <p>Нууц үгээ мартсан?</p>
      </div>
      <div className="btn-div">
        <button type="submit">НЭВТРЭХ</button>
        <a href="#">эсвэл</a>
        <button type="submit">БҮРТГҮҮЛЭХ</button>
      </div>
      {/* <Routes>
        <Route path="userprofile" element={<UserProfile />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes> */}
    </>
  );
}
