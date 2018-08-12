import React, { Component } from 'react'
import { connect } from 'react-redux'

class Landing extends Component {
  render() {
    return (
      <div className='landing'>
        <h2>Landing</h2>
      </div>
    )
  }
}

export default connect()(Landing)
