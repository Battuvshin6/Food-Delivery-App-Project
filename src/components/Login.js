import React from "react";
import "../styles/Login.css";

export default function Login() {
  return (
    <>
      <div className="login-div" id="login">
        <div className="login-section">
          <ol className="ordering-position">
            <li>
              <h1>
                <img src="/images/line.svg" alt="" />
                НЭВТРЭХ
              </h1>
              <form>
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
                <label htmlFor="pwd">Нууц үг</label>
                <br />
                <input
                  type="password"
                  name="pwd"
                  id="pwd"
                  placeholder="Нууц үгээ оруулна уу."
                  required
                />
              </form>
              <a href="/ForgotPassword" className="login-anchor">
                Нууц үгээ мартсан?
              </a>
            </li>

            <button type="submit" className="log-btn" id="log-btn">
              <a href="">НЭВТРЭХ</a>
            </button>
            <a href="#" className="or-btn">
              эсвэл
            </a>
            <button type="submit" className="register-btn" id="register-btn">
              <a href="/Register">БҮРТГҮҮЛЭХ </a>
            </button>
          </ol>
        </div>
      </div>
    </>
  );
}
