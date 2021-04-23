import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ShareBBApi from ".api./"
// import Alert from "../common/Alert";

/** Signup form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls signup function prop
 * - redirects to /companies route
 *
 * Routes -> SignupForm -> Alert
 * Routed as /signup
 */

function ListingsForm({postListing}) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    capacity: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
      "ListingsForm",
      "postListing=", postListing,
      "formData=", formData,
      "formErrors=", formErrors,
  );

  /** Handle form submit:
   *
   * Calls login func prop and, if successful, redirect to /.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await postListing(formData);
    if (result.success) {
      history.push("/");
    } else {
      setFormErrors(result.errors);
    }
  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
      <div className="SignupForm">
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <h2 className="mb-3">New Listing</h2>
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Title</label>
                  <input
                      name="title"
                      className="form-control"
                      value={formData.title}
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input
                      name="description"
                      className="form-control"
                      value={formData.description}
                      onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Location</label>
                  <input
                      name="location"
                      className="form-control"
                      value={formData.location}
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input
                      name="price"
                      className="form-control"
                      value={formData.price}
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Capacity</label>
                  <input
                      name="capacitu"
                      className="form-control"
                      value={formData.capacity}
                      onChange={handleChange}
                  />
                </div>

                {/* {formErrors.length
                    ? <Alert type="danger" messages={formErrors} />
                    : null
                } */}

                <button
                    type="submit"
                    className="btn btn-primary float-right"
                    onSubmit={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ListingsForm;