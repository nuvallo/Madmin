import React from "react";
import { Link } from "react-browser-router";

export const Posts = () => {
  return (
    <section className="section section-posts grey lighten-4">
      <div className="container">
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
                    <tr>
                      <td>Post One</td>
                      <td>Web Development</td>
                      <td>Jan 1, 2018</td>
                      <td>
                        <Link className="btn blue lighten-2" to="/details">
                          Details
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>Post Two</td>
                      <td>Graphic Design</td>
                      <td>Jan 2, 2018</td>
                      <td>
                        <Link className="btn blue lighten-2" to="/details">
                          Details
                        </Link>
                      </td>
                    </tr>
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
      </div>
    </section>
  );
};
