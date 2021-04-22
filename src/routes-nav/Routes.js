import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import Listings from "../listings/Listings";
import ListingsCard from "../listings/ListingsCard";
import Bookings from "../bookings/Bookings";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../profiles/ProfileForm";
import SignupForm from "../auth/SignupForm";
import PrivateRoute from "./PrivateRoute";

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

          <PrivateRoute exact path="/bookings">
            <Bookings />
          </PrivateRoute>

          <PrivateRoute exact path="/listings/:title">
            <ListingsCard />
          </PrivateRoute>

          <PrivateRoute path="/profile">
            <ProfileForm />
          </PrivateRoute>

          <Redirect to="/" />
        </Switch>
      </div>
  );
}

export default Routes;
