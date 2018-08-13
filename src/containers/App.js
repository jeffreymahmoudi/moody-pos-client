import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMenu } from '../actions/menuActions'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Tables from '../containers/Tables'
import Landing from './Landing'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount = () => {
    this.props.loadMenuConnect()
  }
  
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/tables" component={Tables} />
              <Route path="/landing" component={Landing} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadMenuConnect: () => dispatch(fetchMenu())
})

export default connect(null, mapDispatchToProps)(App)
