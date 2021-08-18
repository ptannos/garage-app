import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import MyGarage from "./components/MyGarage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/my-garage" component={MyGarage} />
      </Switch>
    </Router>
  );
};

export default Routes;
