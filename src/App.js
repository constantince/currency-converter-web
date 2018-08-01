import React, { Component } from 'react';
import './App.css';
import { Router, Route } from 'react-router'
import Routes from './config/routes';
import createHashHistory from 'history/createHashHistory';

const history = createHashHistory();

class App extends Component {
  render() {
    return <Router history={history}>
      <div className="layout-core">
        {Routes.map(route => <Route key={route.path} {...route} />)}
      </div>
  </Router>
  }
}

export default App;
