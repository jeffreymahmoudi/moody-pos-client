import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMenu } from '../actions/menuActions'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from '../components/Landing'
import Header from '../components/Header'
// import Footer from '../components/Footer'
import Tables from './Tables'
import Order from './Order'


class App extends Component {
  componentDidMount = () => {
    this.props.loadMenuConnect()
  }
  
  render() {
    return (
      <Router>
        <div className="app-container">
          <Header />
          <main className="app-content">
            <Switch>
              <Route exact path="/" component={Tables} />
              <Route path="/tables" component={Tables} />
              <Route path="/order/:tableId" component={Order} />
              <Route path="/landing" component={Landing} />
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
