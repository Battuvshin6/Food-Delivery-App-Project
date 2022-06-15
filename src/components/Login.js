import React from "react";
import "../styles/Login.css";
// import { useUser } from "../contexts/UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userServices } from "../services/userServices";
export default function Login() {
  const [user, setUser] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    console.log(e.target[0].value);
    e.preventDefault();
    userServices
      .loginUser({
        email: e.target[0].value,
        password: e.target[1].value,
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("user", JSON.stringify(data.data));
          localStorage.setItem("token", JSON.stringify(data.token));
          setUser({ data: data.data.name });
          handleClose();
          window.location.reload(true);
        } else {
          alert(data.message);
        }
      });
  };

  return (
    <>
      <div className="login-div" id="login">
        <div className="login-section">
          <ol className="ordering-position">
            <li>
              <form onSubmit={submitHandler}>
                <h1 className="login-h1">
                  <img src="/images/line.svg" alt="" />
                  НЭВТРЭХ
                </h1>

                <label htmlFor="mail">И-мэйл</label>
                <br />
                <input
                  type="text"
                  name="mail"
                  id="login-mail"
                  placeholder="И-мэйл хаягаа оруулна уу."
                  required
                />
                <br />
                <label htmlFor="pwd">Нууц үг</label>
                <br />
                <input
                  type="password"
                  name="pwd"
                  id="pwd"
                  placeholder="Нууц үгээ оруулна уу."
                  required
                />
                <a href="/ForgotPassword" className="login-anchor">
                  Нууц үгээ мартсан?
                </a>
                <button type="submit" className="log-btn" id="log-btn">
                  НЭВТРЭХ
                </button>
                <a href="#" className="or-btn">
                  эсвэл
                </a>
                <button
                  type="submit"
                  className="register-btn"
                  id="register-btn"
                >
                  <a href="/Register">БҮРТГҮҮЛЭХ </a>
                </button>
              </form>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
