import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sorting from "./src/pages/Sorting/Sorting";

export default function Main() {
  return (
    <Switch>
      <Route path="/sorting" component={Sorting} />
      <Route path="" component={Sorting} />
    </Switch>
  );
}
