import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Login.css";
export default function Login() {
  return (
    <>
      <Header />
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
              </form>
              <a className="login-anchor">Нууц үгээ мартсан?</a>
            </li>

            <button type="submit" className="log-btn" id="log-btn">
              НЭВТРЭХ
            </button>
            <a href="#" className="or-btn">
              эсвэл
            </a>
            <button type="submit" className="register-btn" id="register-btn">
              БҮРТГҮҮЛЭХ
            </button>
          </ol>
        </div>
      </div>
      <Footer />
    </>
  );
}
