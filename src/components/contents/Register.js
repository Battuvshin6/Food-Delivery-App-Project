import React from "react";
import "../../styles/Register.css";
import { useNavigate } from "react-router-dom";
import { userServices } from "../../services/userServices";
export default function Register() {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    userServices.signUpUser({
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      address: e.target[3].value,
      password: e.target[4].value,
    });
    navigate({ pathname: "/login" });
    window.location.reload(true);
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
          <label htmlFor="phone">Утас</label>
          <br />
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Утасны дугаараа оруулна уу."
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
