import React, { Component } from 'react';
import './App.css';
// import { Router, Route } from 'react-router'
import Routes from './config/routes';
// import createHashHistory from 'history/createHashHistory';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// const history = createHashHistory();
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { applyMiddleware, createStore} from 'redux';
import { Provider } from "react-redux";
import {createLogger} from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';
import {RouteWithSubRoutes} from './utils';
import Saga from './Saga';
import Reducer from './Reducer';

const sagaMiddleWare = createSagaMiddleWare();
const loggMiddleWare = createLogger({collapsed: true});

const store = createStore(Reducer, applyMiddleware(
  loggMiddleWare, sagaMiddleWare
));

sagaMiddleWare.run(Saga);


class App extends Component {
  render() {
    return <Router>
      <Provider store={store}>
        <div className="layout-core">
          {Routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>
      </Provider>
  </Router>
  }
}

export default App;
