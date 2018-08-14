import React, { Component } from 'react'
import { connect } from 'react-redux'
import MenuItemCard from '../components/MenuItemCard'

import '../styles/order.css';

class Order extends Component {
  componentDidMount = () => {
    // this.props.createNewCheck(selectedTable)
  }

  renderMenuItems = () => {
    const menu = this.props.menu.map((item, index) =>
      <li key={index}>
        <div className="menu-item">
        <div className="menu-button"><button onClick={() => alert(item.name + " added...")}>Add</button></div>
          <h2>{item.name} - ${item.price}</h2>
        </div>
      </li>
    )

    return menu;
  }

  renderResults = () => {
    // if (this.props.loading) {
    //   return <p>Loading tables...</p>;
    // }

    // if (this.props.error) {
    //   return <strong>{this.props.error.message}</strong>;
    // }

    
  }
  
  render() {
    return (
      <div className="menu-container">
        <ul className="menu-list">
          {this.renderMenuItems()}
        </ul>
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
