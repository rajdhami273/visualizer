import React from "react";
import {
  Switch,
  Route,
  Link,
  BrowserRouter,
  useLocation,
} from "react-router-dom";
import BubbleSort from "./BubbleSort/BubbleSort";
import InsertionSort from "./InsertionSort/InsertionSort";
import "./Sorting.scss";
function SortingRoutes() {
  return (
    <Switch>
      <Route component={BubbleSort} path="/bubble-sort" />
      <Route component={InsertionSort} path="/insertion-sort" />
      <Route component={BubbleSort} path="" />
    </Switch>
  );
}

export default function Sorting(props) {
  return (
    <BrowserRouter basename="/sorting">
      <div className="sidebar">
        <Link to="/bubble-sort">Bubble Sort</Link>
        <Link to="/insertion-sort">Insertion Sort</Link>
      </div>
      <SortingRoutes />
    </BrowserRouter>
  );
}
