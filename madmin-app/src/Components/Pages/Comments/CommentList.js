import React from "react";

export const Comments = ({ comments }) => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Comments</span>
            <table className="striped">
              <tbody>
                {comments.map(comment => {
                  return (
                    <tr>
                      <td width="70">
                        <img
                          className="responsive-img cirlce"
                          src={comment.image_url}
                          alt="Profile Picture"
                        />
                      </td>
                      <td>{comment.comment_text}</td>
                      <td>
                        <a href="#!" className="green-text">
                          <i className="material-icons">done</i>
                        </a>
                        <a href="#!" className="red-text">
                          <i className="material-icons">close</i>
                        </a>
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
