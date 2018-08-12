import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Landing from './Landing'
import Dashboard from './Dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/landing" component={Landing} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default connect()(App)