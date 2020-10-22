import React from "react";
import { Switch, Route } from "react-router";
import Home from "./container/Home";
import Login from "./container/Login";
import Business from "./container/Business";
import AddBusiness from "./container/AddBusiness"

// const checkAuth = () => {
//   const cookies = cookie.parse(document.cookie)
//   return cookies['loggedIn'] ? true : false
// }

// const ProtectedRoute = ({component:Component, ...rest}) => {
//   return(
//     <Route {...rest} render={(props) => checkAuth()
//       ? <Component {...props} />
//       : <Redirect to="/login" />}
//     />
//   )
// }

const Router = () => {
  return (
    <Switch>

      <Route exact path="/" component={Home} />
      <Route exact path="/add" component={AddBusiness} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/business/:id" component={Business} />
    </Switch>
  );
};

export default Router;
