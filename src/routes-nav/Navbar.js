import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";
// import "./Navigation.css";

/** Navigation bar for site. Shows up on every page.
 *
 * When user is logged in, shows links to main areas of site. When not,
 * shows link to Login and Signup forms.
 *
 * Rendered by App.
 */

function Navbar() {
//   const { currentUser } = useContext(UserContext);
//   console.log("current", currentUser, UserContext)
//   console.debug("Navigation", "currentUser=", currentUser);


    return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/listings">
              Listings
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/bookings">
              Bookings
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/profile">
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              Sign up 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/create-listing">
              Add listing 
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/" onClick={logout}>
              Log out {currentUser.first_name || currentUser.username}
            </Link>
          </li> */}
        </ul>
    );
}

export default Navbar