import React from "react";
import { Link } from "react-browser-router";

export const Posts = ({ posts }) => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Posts</span>
            <table className="striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Date Created</th>
                </tr>
              </thead>
              <tbody>
                {posts.map(post => {
                  return (
                    <tr>
                      <td>{post.title}</td>
                      <td>{post.category}</td>
                      <td>{post.date_created}</td>
                      <td>
                        <Link className="btn blue lighten-2" to="/details">
                          Details
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="card-action">
            <ul className="pagination">
              <li className="disabled">
                <a href="#!" className="blue-text">
                  <i className="material-icons">chevron_left</i>
                </a>
              </li>
              <li className="active blue lighten-2">
                <a href="#!" className="white-text">
                  1{" "}
                </a>
              </li>
              <li className="waves-effect ">
                <a href="#!" className="blue-text">
                  2{" "}
                </a>
              </li>
              <li className="waves-effect ">
                <a href="#!" className="blue-text">
                  3{" "}
                </a>
              </li>
              <li className="waves-effect ">
                <a href="#!" className="blue-text">
                  4{" "}
                </a>
              </li>
              <li className="waves-effect ">
                <a href="#!" className="blue-text">
                  5{" "}
                </a>
              </li>
              <li className="waves-effect">
                <a href="#!" className="blue-text">
                  <i className="material-icons">chevron_right</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
