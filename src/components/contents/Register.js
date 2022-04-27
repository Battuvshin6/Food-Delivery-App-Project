import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "../../styles/Register.css";
export default function Regiser() {
  return (
    <>
      <Header />
      <div className="register-section" id="register">
        <form>
          <h1 className="">
            <img src="/images/line.svg" alt="line" />
            Бүртгүүлэх
          </h1>
          <label htmlFor="name">Нэр</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Нэрээ оруулна уу."
          />
          <br />
          <label htmlFor="mail">И-мэйл</label>
          <br />
          <input
            type="text"
            name="mail"
            id="mail"
            placeholder="И-мэйл хаягаа оруулна уу."
          />
          <br />
          <label htmlFor="address">Нэр</label>
          <br />
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Та хаягаа оруулна уу."
          />
          <br />
          <label htmlFor="pwd">Нууц үг</label>
          <br />
          <input
            type="password"
            name="pwd"
            id="pwd"
            placeholder="Нууц үгээ оруулна уу."
          />
          <br />
          <label htmlFor="pwd">Нууц үг давтах</label>
          <br />
          <input
            type="password"
            name="pwd"
            id="pwd"
            placeholder="Нууц үгээ оруулна уу."
          />
          <br />
          <label htmlFor="tandC" className="tandC">
            <input type="checkbox" name="tandC" id="tandC" />
            Үйлчилгээний нөхцөл зөвшөөрөх
          </label>
          <br />
          <button type="button" id="register-btn">
            Бүртгүүлэх
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
