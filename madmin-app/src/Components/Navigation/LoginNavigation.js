import React from "react";

export const LoginNavigation = () => {
  return (
    <nav className="blue darken-2">
      <div className="container">
        <div className="nav-wrapper">
          <a href="index.html" className="brand-logo">
            Madmin
          </a>
          <ul className="right hide-on-med-and-down">
            <li className="active">
              <a href="index.html">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
