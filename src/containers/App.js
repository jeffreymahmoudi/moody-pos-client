import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Landing from './Landing'
import Dashboard from './Dashboard'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Link to="/"><h1>App</h1></Link>
          <Link to="/landing">Landing</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/landing" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}
