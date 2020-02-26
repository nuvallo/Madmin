import React from "react";

export const Stats = props => {
  console.log(props.data.value);
  return (
    <section className="section section-stats center">
      <div className="row">
        {props.data.value.map(employee => {
          return (
            <div className="col s12 m6 l3">
              <div className="card-panel blue lighten-1 white-text center">
                <i className="material-icons medium">insert_emoticon</i>
                <h5>{employee.employee_name}</h5>
                <h3 className="count">{employee.employee_salary}</h3>
                <div className="progress grey lighten-1">
                  <div className="determinate white"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
