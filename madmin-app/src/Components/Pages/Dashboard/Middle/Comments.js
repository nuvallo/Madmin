import React from "react";

export const Comments = () => {
  return (
    <div className="col s12 m6 l4">
      <ul className="collection with-header latest-comments">
        <li className="collection-header">
          <h5>Latest Comments</h5>
        </li>
        <li className="collection-item avatar">
          <img src="img/person1.jpg" alt="" className="circle" />
          <span className="title">John Doe</span>
          <p className="truncate">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            minima dolor error laboriosam autem ad beatae explicabo pariatur
            maxime fuga sed quod quo voluptas, adipisci illum aspernatur est,
            fugit tempore.
          </p>
          <a href="" className="approve green-text">
            Approve
          </a>
          |
          <a href="" className="deny red-text">
            Deny
          </a>
        </li>
      </ul>
    </div>
  );
};
