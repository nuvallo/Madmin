import React from "react";
import { Link } from "react-browser-router";

export const Category = ({ categories }) => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Categories</span>
            <table className="striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date Created</th>
                </tr>
              </thead>
              <tbody>
                {categories.map(category => {
                  return (
                    <tr>
                      <td>{category.title}</td>
                      <td>{category.date_created}</td>
                      <td>
                        <Link to="/details" className="btn blue lighten-2">
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
