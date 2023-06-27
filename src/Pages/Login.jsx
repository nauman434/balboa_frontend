import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userService from "../services/UserService";
import styles from "../style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <section className={`${styles.flexCenter} h-[50vh]`}>
      <div>
        <div className="flex flex-col">
          <h1 className="text-center font-bold text-[36px] p-5">Login</h1>
          <div className="w-[300px]">
            <form
              action=""
              className="flex flex-col "
              onSubmit={(e) => {
                e.preventDefault();
                userService
                  .login({ email, password })
                  .then(navigate("/admin"))
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="login_field"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="login_field"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button type="submit" className="btn bg-secondary m-5">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
