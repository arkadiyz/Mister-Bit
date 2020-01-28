import React from 'react';
// import { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './App.css';
import './style/style.css';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage'
import ContactDetailsPage from './pages/ContactDetailsPage'
import NavLink from './cmps/NavBar'
import ContactFilter from './cmps/ContactFilter'

const history = createBrowserHistory();
function App() {
  return (
    <React.Fragment>
    <Router history={history}>
        <NavLink></NavLink>
      <Switch>
        <Route component={HomePage} path='/' exact></Route>
        <Route component={ContactPage} path='/contacts/' exact></Route>
        <Route component={ContactDetailsPage} path='/contacts/:id' exact></Route>

      </Switch>
    </Router>
  </React.Fragment>

  );
}

export default App;
