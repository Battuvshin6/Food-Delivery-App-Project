import React from "react";
import "../styles/Login.css";

export default function Login() {
  const submitHandler = (e) => {
    console.log("loggin submmitted");
    e.preventDefault();
    fetch("http://localhost:8000/api/user/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: "123344@gmail.com",
        password: "1234",
      }),
    })
      .then((response) => response.json())

      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data.data));
        localStorage.setItem("token", JSON.stringify(data.token));
      })
      .catch((err) => {
        console.log({
          data: err,
        });
      });
  };
  const logOutHandler = () => {
    localStorage.clear();
  };
  return (
    <>
      <div className="login-div" id="login">
        <div className="login-section">
          <ol className="ordering-position">
            <li>
              <h1 className="login-h1">
                <img src="/images/line.svg" alt="" />
                НЭВТРЭХ
              </h1>
              <form onSubmit={submitHandler}>
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
              </form>
              <a href="/ForgotPassword" className="login-anchor">
                Нууц үгээ мартсан?
              </a>
            </li>

            <button
              onClick={(e) => submitHandler(e)}
              type="submit"
              className="log-btn"
              id="log-btn"
            >
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
