import React from "react";

export const Todo = () => {
  return (
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
          </ul>
        </div>
      </div>
    </div>
  );
};
