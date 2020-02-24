import React from "react";

export const Comments = () => {
  return (
    <section className="section section-comments grey lighten-4">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Comments</span>
                <table className="striped">
                  <tbody>
                    <tr>
                      <td width="70">
                        <img
                          className="responsive-img cirlce"
                          src="img/person1.jpg"
                          alt="James"
                        />
                      </td>
                      <td>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nisi, quae.
                      </td>
                      <td>
                        <a href="#!" className="green-text">
                          <i className="material-icons">done</i>
                        </a>
                        <a href="#!" className="red-text">
                          <i className="material-icons">close</i>
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
                      <td>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nisi, quae.
                      </td>
                      <td>
                        <a href="#!" className="green-text">
                          <i className="material-icons">done</i>
                        </a>
                        <a href="#!" className="red-text">
                          <i className="material-icons">close</i>
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
                      <td>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nisi, quae.
                      </td>
                      <td>
                        <a href="#!" className="green-text">
                          <i className="material-icons">done</i>
                        </a>
                        <a href="#!" className="red-text">
                          <i className="material-icons">close</i>
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
                      <td>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nisi, quae.
                      </td>
                      <td>
                        <a href="#!" className="green-text">
                          <i className="material-icons">done</i>
                        </a>
                        <a href="#!" className="red-text">
                          <i className="material-icons">close</i>
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
