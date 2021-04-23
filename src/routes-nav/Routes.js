import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../Homepage";
import Listings from "../listings/Listings";
import ListingsCard from "../listings/ListingCard";
import Bookings from "../bookings/Bookings";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../users/ProfileForm";
import SignupForm from "../auth/SignupForm";
//import PrivateRoute from "./PrivateRoute";

/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function Routes() {
//   console.debug(
//       "Routes",
//       `login=${typeof login}`,
//       `register=${typeof register}`,
//   );

  return (
      <div className="pt-5">
        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/login">
            <LoginForm />
          </Route>

          <Route exact path="/signup">
            <SignupForm />
          </Route>

          <Route exact path="/listings">
            <Listings />
          </Route>

          <Route exact path="/bookings">
            <Bookings />
          </Route>

          <Route exact path="/listings/:id">
            <ListingsCard />
          </Route>

          <Route path="/profile">
            <ProfileForm />
          </Route>

          <Redirect to="/" />
        </Switch>
      </div>
  );
}

export default Routes;
