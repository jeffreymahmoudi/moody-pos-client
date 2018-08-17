import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMenu } from '../actions/menuActions'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from '../components/Landing'
import Header from '../components/Header'
// import Footer from '../components/Footer'
import Tables from './Tables'
import Order from './Order'

import '../styles/app.css'

class App extends Component {
  componentDidMount = () => {
    this.props.loadMenuConnect()
  }
  
  render() {
    return (
      <Router>
        <div className="app-container">
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Tables} />
              <Route exact path="/tables" component={Tables} />
              <Route exact path="/order" component={Order} />
              <Route expath="/landing" component={Landing} />
            </Switch>
          </main>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadMenuConnect: () => dispatch(fetchMenu())
})

export default connect(null, mapDispatchToProps)(App)
