import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Regiser() {
  return (
    <>
      <Header />
      <div className="register-section">
        <h1>
          <img src="/images/line.svg" alt="line" />
          Бүртгүүлэх
        </h1>
        <form>
          <label htmlFor="name">Нэр</label>
          <br />
          <input type="text" name="name" id="name" />
          <br />
          <label htmlFor="mail">И-мэйл</label>
          <br />
          <input type="text" name="mail" id="mail" />
          <br />
          <label htmlFor="address">Нэр</label>
          <br />
          <input type="text" name="address" id="address" />
          <br />
          <label htmlFor="pwd">Нууц үг</label>
          <br />
          <input type="password" name="pwd" id="pwd" />
          <br />
          <label htmlFor="pwd">Нууц үг давтах</label>
          <br />
          <input type="password" name="pwd" id="pwd" />
          <br />
        </form>
        <br />
      </div>
      <Footer />
    </>
  );
}
