import React, { Component } from 'react'
import { connect } from 'react-redux'

class Order extends Component {
  render() {
    return (
      <div>
                        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  menu: state.menu.menu,
  selectedTable: state.selectedTable
})

const mapDispatchToProps = dispatch => ({  
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)
