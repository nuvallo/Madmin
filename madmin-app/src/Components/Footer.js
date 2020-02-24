import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="section blue darken-2 white-text center">
        <p>Madmin Panel Copyright &copy; 2019 | Tyler Miller</p>
      </footer>

      <div className="fixed-action-btn">
        <a className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </a>
        <ul>
          <li>
            <a href="#post-modal" className="modal-trigger btn-floating blue">
              <i className="material-icons">mode_edit</i>
            </a>
          </li>
          <li>
            <a
              href="#category-modal"
              className="modal-trigger btn-floating blue"
            >
              <i className="material-icons">folder</i>
            </a>
          </li>
          <li>
            <a href="#user-modal" className="modal-trigger btn-floating blue">
              <i className="material-icons">supervisor_account</i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
