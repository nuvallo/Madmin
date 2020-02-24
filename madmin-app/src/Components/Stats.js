import React from "react";

export const Stats = () => {
  return (
    <section className="section section-stats center">
      <div className="row">
        <div className="col s12 m6 l3">
          <div className="card-panel blue lighten-1 white-text center">
            <i className="material-icons medium">insert_emoticon</i>
            <h5>Monthly Visitors</h5>
            <h3 className="count">28300</h3>
            <div className="progress grey lighten-1">
              <div className="determinate white"></div>
            </div>
          </div>
        </div>
        <div className="col s12 m6 l3">
          <div className="card-panel center">
            <i className="material-icons medium">mode_edit</i>
            <h5>Blog Posts</h5>
            <h3 className="count">105</h3>
            <div className="progress grey lighten-1">
              <div className="determinate blue lighten-1"></div>
            </div>
          </div>
        </div>
        <div className="col s12 m6 l3">
          <div className="card-panel blue lighten-1 white-text center">
            <i className="material-icons medium">mode_comment</i>
            <h5>Comments</h5>
            <h3 className="count">1200</h3>
            <div className="progress grey lighten-1">
              <div className="determinate white"></div>
            </div>
          </div>
        </div>
        <div className="col s12 m6 l3">
          <div className="card-panel center">
            <i className="material-icons medium">supervisor_account</i>
            <h5>Users</h5>
            <h3 className="count">350</h3>
            <div className="progress grey lighten-1">
              <div className="determinate blue lighten-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
