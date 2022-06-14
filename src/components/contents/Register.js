import React from "react";
import "../../styles/Register.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userServices } from "../../services/userServices";
import { useUser } from "../../contexts/UserContext";
export default function Register() {
  const [user, setUser] = useState({});
  const [signUp, setSignUp] = useState({});
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    userServices.signUpUser({
      name: e.name,
      password: e.password,
      email: e.email,
      address: e.address,
    });

    // if (!localStorage.getItem("data")) {
    //   navigate({ pathname: "/register" });
    //   window.location.reload(false);
    // }
  };
  return (
    <>
      <div className="register-section" id="register">
        <form onSubmit={submitHandler}>
          <h1 className="register-h1">
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
            required
          />
          <br />
          <label htmlFor="mail">И-мэйл</label>
          <br />
          <input
            type="text"
            name="mail"
            id="mail"
            placeholder="И-мэйл хаягаа оруулна уу."
            required
          />
          <br />
          <label htmlFor="address">Хаяг</label>
          <br />
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Та хаягаа оруулна уу."
            required
          />
          <br />
          <label htmlFor="pwd">Нууц үг</label>
          <br />
          <input
            type="password"
            name="pwd"
            id="password"
            placeholder="Нууц үгээ оруулна уу."
            required
          />
          <br />
          <label htmlFor="pwd">Нууц үг давтах</label>
          <br />
          <input
            type="password"
            name="pwd"
            id="pwd"
            placeholder="Нууц үгээ оруулна уу."
            required
          />
          <br />
          <label htmlFor="tandC" className="tandC">
            <input type="checkbox" name="tandC" id="tandC" required />
            <a className="termAndCond">Үйлчилгээний нөхцөл зөвшөөрөх</a>
          </label>
          <br />
          <button type="submit" id="register-btn">
            Бүртгүүлэх
          </button>
        </form>
      </div>
    </>
  );
}
