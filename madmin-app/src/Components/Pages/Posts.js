import React from "react";

export const Posts = () => {
  return (
    <section class="section section-posts grey lighten-4">
      <div class="container">
        <div class="row">
          <div class="col s12">
            <div class="card">
              <div class="card-content">
                <span class="card-title">Posts</span>
                <table class="striped">
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
                        <a href="details.html" class="btn blue lighten-2">
                          Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Post Two</td>
                      <td>Graphic Design</td>
                      <td>Jan 2, 2018</td>
                      <td>
                        <a href="details.html" class="btn blue lighten-2">
                          Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Post Three</td>
                      <td>Web Development</td>
                      <td>Jan 5, 2019</td>
                      <td>
                        <a href="details.html" class="btn blue lighten-2">
                          Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Post Four</td>
                      <td>Tech Gadgets</td>
                      <td>Jan 31, 2018</td>
                      <td>
                        <a href="details.html" class="btn blue lighten-2">
                          Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Post Five</td>
                      <td>Logo Design</td>
                      <td>Jan 25, 2018</td>
                      <td>
                        <a href="details.html" class="btn blue lighten-2">
                          Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Post Six</td>
                      <td>Software Devlopment</td>
                      <td>Jan 9, 2019</td>
                      <td>
                        <a href="details.html" class="btn blue lighten-2">
                          Details
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="card-action">
                <ul class="pagination">
                  <li class="disabled">
                    <a href="#!" class="blue-text">
                      <i class="material-icons">chevron_left</i>
                    </a>
                  </li>
                  <li class="active blue lighten-2">
                    <a href="#!" class="white-text">
                      1{" "}
                    </a>
                  </li>
                  <li class="waves-effect ">
                    <a href="#!" class="blue-text">
                      2{" "}
                    </a>
                  </li>
                  <li class="waves-effect ">
                    <a href="#!" class="blue-text">
                      3{" "}
                    </a>
                  </li>
                  <li class="waves-effect ">
                    <a href="#!" class="blue-text">
                      4{" "}
                    </a>
                  </li>
                  <li class="waves-effect ">
                    <a href="#!" class="blue-text">
                      5{" "}
                    </a>
                  </li>
                  <li class="waves-effect">
                    <a href="#!" class="blue-text">
                      <i class="material-icons">chevron_right</i>
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
