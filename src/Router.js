import React from "react";
import { Switch, Route } from "react-router";
import Home from "./components/Home";
import Login from "./components/Login";
import Business from "./components/Business";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/business/:id" component={Business} />
    </Switch>
  );
};

export default Router;
