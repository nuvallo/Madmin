import React from "react";

export const Details = () => {
  return (
    <section className="section section-details grey lighten-4">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="card">
              <div className="card-content">
                <div className="row">
                  <div className="col s12 m6">
                    <span className="card-title">Post Details</span>
                  </div>
                  <div className="col s12 m6 center">
                    <img
                      src="img/person1.jpg"
                      alt=""
                      className="responsive-img circle"
                    />
                    <p>Posted By John Doe</p>
                    <p>On Jan, 12, 2018</p>
                  </div>
                </div>

                <form>
                  <div className="input-field">
                    <input type="text" id="title" value="Post One" />
                    <label for="title">Title</label>
                  </div>
                  <div className="input-field">
                    <select>
                      <option value="" disabled>
                        Select option
                      </option>
                      <option value="1" selected>
                        Web Development
                      </option>
                      <option value="2">Graphic Design</option>
                      <option value="3">Tech Gadgets</option>
                      <option value="4">Other</option>
                    </select>
                    <label>Category</label>
                  </div>
                  <div className="input-field">
                    <textarea
                      name="body"
                      id="body"
                      className="materialize-textarea"
                    >
                      This is the content for post one
                    </textarea>
                  </div>
                </form>
              </div>
              <div className="card-action">
                <button className="btn green">Save</button>
                <button className="btn red">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
