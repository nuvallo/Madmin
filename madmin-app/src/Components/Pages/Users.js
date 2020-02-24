import React from "react";

export const Users = () => {
  return (
    <section className="section section-users grey lighten-4">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Users</span>
                <table className="striped">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Registered</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="70">
                        <img
                          className="responsive-img cirlce"
                          src="img/person1.jpg"
                          alt="James"
                        />
                      </td>
                      <td>John Doe</td>
                      <td>Jdoe@gmail.com</td>
                      <td>Jan, 1 2019</td>
                      <td>
                        <a href="details.html" className="btn blue lighten-2">
                          View Profile
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td width="70">
                        <img
                          className="responsive-img cirlce"
                          src="img/person2.jpg"
                          alt="James"
                        />
                      </td>
                      <td>Larry Watters</td>
                      <td>LarryWatters@gmail.com</td>
                      <td>Jan, 3 2019</td>
                      <td>
                        <a href="details.html" className="btn blue lighten-2">
                          View Profile
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td width="70">
                        <img
                          className="responsive-img cirlce"
                          src="img/person3.jpg"
                          alt="James"
                        />
                      </td>
                      <td>Susan William</td>
                      <td>SusanWill12@gmail.com</td>
                      <td>Jan, 5 2019</td>
                      <td>
                        <a href="details.html" className="btn blue lighten-2">
                          View Profile
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td width="70">
                        <img
                          className="responsive-img cirlce"
                          src="img/person4.jpg"
                          alt="James"
                        />
                      </td>
                      <td>Jeff Burke</td>
                      <td>Jburke@gmail.com</td>
                      <td>Jan, 10 2019</td>
                      <td>
                        <a href="details.html" className="btn blue lighten-2">
                          View Profile
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
