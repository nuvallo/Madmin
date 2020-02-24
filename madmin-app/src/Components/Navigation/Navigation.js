import React from "react";
import { Link } from "react-browser-router";

export const Navigation = () => {
  return (
    <nav className="blue darken-2">
      <div className="container">
        <div className="nav-wrapper">
          <Link className="brand-logo" to="/protected">
            Madmin
          </Link>
          <a href="#" className="button-collapse show-on-large right">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/protected">Dashboard</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/comments">Comments</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
