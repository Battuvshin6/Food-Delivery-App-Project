import React from "react";
import "../../styles/ForgotPassword.css";
export default function ForgotPassword() {
  return (
    <>
      <div className="forgotpassword">
        <ol className="ordering-position">
          <li>
            <h1>
              <img src="/images/line.svg" alt="" />
              Нууц үг сэргээх
            </h1>
          </li>
          <li>
            <label htmlFor="FPEmail" className="labelOfFP">
              И-мэйл
            </label>
            <input
              type="text"
              name="FPEmail"
              id="FPEmail"
              placeholder="И-мэйл хаягаа оруулна уу."
              required
            />
          </li>
          <li>
            <button
              type="submit"
              className="forgot-password"
              id="forgot-password"
            >
              <a href="">БҮРТГҮҮЛЭХ</a>
            </button>
          </li>
        </ol>
      </div>
    </>
  );
}
