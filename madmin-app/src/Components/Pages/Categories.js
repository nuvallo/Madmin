import React from "react";

export const Categories = () => {
  return (
    <section className="section section-categories grey lighten-4">
      <div className="container">
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
                    <tr>
                      <td>Web Development</td>
                      <td>Jan 1, 2018</td>
                      <td>
                        <a href="details.html" className="btn blue lighten-2">
                          Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Graphic Design</td>
                      <td>Jan 2, 2018</td>
                      <td>
                        <a href="details.html" className="btn blue lighten-2">
                          Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Tech Gadgets</td>
                      <td>Jan 5, 2019</td>
                      <td>
                        <a href="details.html" className="btn blue lighten-2">
                          Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Other</td>
                      <td>Jan 31, 2018</td>
                      <td>
                        <a href="details.html" className="btn blue lighten-2">
                          Details
                        </a>
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
