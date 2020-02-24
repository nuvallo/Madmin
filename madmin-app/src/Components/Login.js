import React from "react";

export const Login = () => {
  return (
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
                  <label className="white-text" for="email">
                    Email Address
                  </label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">lock</i>
                  <input className="password" id="password" />
                  <label className="white-text" for="password">
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
  );
};
