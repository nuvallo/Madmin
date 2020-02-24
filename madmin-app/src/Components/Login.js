import React from "react";
import { LoginNavigation } from "./Navigation/LoginNavigation";

export const Login = () => {
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
                    <input type="email" id="email" />
                    <label className="white-text" htmlFor="email">
                      Email Address
                    </label>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">lock</i>
                    <input type="password" className="password" id="password" />
                    <label className="white-text" htmlFor="password">
                      password
                    </label>
                  </div>
                  <input
                    type="submit"
                    value="login"
                    className="btn btn-large btn-extended grey lighten-4 black-text"
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
