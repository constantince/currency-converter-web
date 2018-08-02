import React, { Component } from 'react';
import './App.css';
// import { Router, Route } from 'react-router'
import Routes from './config/routes';
// import createHashHistory from 'history/createHashHistory';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// const history = createHashHistory();
import { TransitionGroup, CSSTransition } from "react-transition-group";

import {RouteWithSubRoutes} from './utils';


class App extends Component {
  render() {
    return <Router>
      <div className="layout-core">
        {Routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
     
  </Router>
  }
}

export default App;
