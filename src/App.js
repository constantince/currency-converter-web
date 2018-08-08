import React, { Component } from 'react';
import './App.css';
import Routes from './config/routes';
import { BrowserRouter as Router, Switch} from "react-router-dom";
import { Provider } from "react-redux";
import {RouteWithSubRoutes} from './utils';
import store from './config/store';

class App extends Component {
  render() {
    return <Router>
      <Provider store={store}>
        <div className="layout-core">
          {/* <Switch> */}
            {Routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
          {/* </Switch> */}
        </div>
      </Provider>
  </Router>
  }
}

export default App;
