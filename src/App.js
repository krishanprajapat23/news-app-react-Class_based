import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <News pageSize={6} key="general" country="in" category="general" />
            </Route>
            <Route exact path="/business">
              <News pageSize={6} key="business" country="in" category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News pageSize={6} key="entertainment" country="in" category="entertainment" />
            </Route>
            <Route exact path="/health">
              <News pageSize={6} key="health" country="in" category="health" />
            </Route>
            <Route exact path="/science">
              <News pageSize={6} key="science" country="in" category="science" />
            </Route>
            <Route exact path="/sports">
              <News pageSize={6} key="sports" country="in" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News pageSize={6} key="technology" country="in" category="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
