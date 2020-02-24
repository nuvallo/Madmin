import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { LoginNavigation } from "./Navigation/LoginNavigation";

export const Login = props => {
  const [cred, setCred] = useState({
    email: "",
    password: ""
  });

  const handleChange = event => {
    console.log(event.target.value);
    setCred({ ...cred, [event.target.name]: event.target.value });
  };

  const submitLogin = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("/login", cred)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(err => {
        localStorage.removeItem("token");
        console.log("invalid login ", err);
      });
  };

  return (
    <>
      <LoginNavigation />
      <section className="section section-login">
        <div className="container">
          <div className="row">
            <div className="col s12 m8 offset-m2 l6 offset-l3">
              <div className="card-panel login blue darken-2 white-text center">
                <h2>Madmin Login</h2>
                <form action="index.html">
                  <div className="input-field">
                    <i className="material-icons prefix">email</i>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={cred.email}
                      onChange={handleChange}
                    />
                    <label className="white-text" htmlFor="email">
                      Email Address
                    </label>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">lock</i>
                    <input
                      type="password"
                      className="password"
                      id="password"
                      name="password"
                      value={cred.password}
                      onChange={handleChange}
                    />
                    <label className="white-text" htmlFor="password">
                      password
                    </label>
                  </div>
                  <input
                    type="submit"
                    value="login"
                    className="btn btn-large btn-extended grey lighten-4 black-text"
                    onClick={submitLogin}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
