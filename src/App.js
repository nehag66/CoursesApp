import React from "react";

import CoursesList from "./Containers/CoursesList";
import BBA from "./Components/bba";
import BCA from "./Components/bca";
import MCA from "./Components/mca";
import PGDM from "./Components/pgdm";

import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  let routes = (
    <Switch>
      <Route exact path="/">
        <CoursesList />
      </Route>
      <Route path="/bca">
        <BCA />
      </Route>
      <Route path="/bba">
        <BBA />
      </Route>
      <Route path="/pgdm">
        <PGDM />
      </Route>
      <Route path="/mca">
        <MCA />
      </Route>
    </Switch>
  );

  return <div className="App">{routes}</div>;
}

export default App;
