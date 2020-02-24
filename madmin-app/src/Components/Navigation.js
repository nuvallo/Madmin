import React from "react";

export const Navigation = () => {
  return (
    <nav className="blue darken-2">
      <div className="container">
        <div className="nav-wrapper">
          <a href="index.html" className="brand-logo">
            Madmin
          </a>
          <a href="#" className="button-collapse show-on-large right">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li className="active">
              <a href="index.html">Dashboard</a>
            </li>
            <li>
              <a href="posts.html">Posts</a>
            </li>
            <li>
              <a href="categories.html">Categories</a>
            </li>
            <li>
              <a href="comments.html">Comments</a>
            </li>
            <li>
              <a href="users.html">Users</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
