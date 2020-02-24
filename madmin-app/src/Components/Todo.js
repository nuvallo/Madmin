import React from "react";

export const Todo = () => {
  return (
    <section className="section section-recent">
      <div className="row">
        <div className="col s12 l8 m6">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Recent Posts</span>
              <table className="striped">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Post One</td>
                    <td>Web Development</td>
                    <td>
                      <a href="details.html" className="btn blue lighten-2">
                        Details
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Post Two</td>
                    <td>Graphic Design</td>
                    <td>
                      <a href="details.html" className="btn blue lighten-2">
                        Details
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Post Three</td>
                    <td>Web Development</td>
                    <td>
                      <a href="details.html" className="btn blue lighten-2">
                        Details
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Quick Todos</span>
              <form id="todo-form">
                <div className="input-field">
                  <input id="todo" type="text" placeholder="Add Todo..." />
                </div>
              </form>
              <ul className="collection todos">
                <li className="collection-item">
                  <div>
                    Create a new project
                    <a href="#!" class="secondary-content delete">
                      <i className="material-icons">close</i>
                    </a>
                  </div>
                </li>
                <li className="collection-item">
                  <div>
                    Clean the office
                    <a href="#!" className="secondary-content delete">
                      <i className="material-icons">close</i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
