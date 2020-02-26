import React from "react";

export const RecentPosts = () => {
  return (
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
  );
};
