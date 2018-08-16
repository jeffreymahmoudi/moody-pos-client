import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchChecks, fetchNewCheck } from '../actions/checkActions'
import MenuItemCard from '../components/MenuItemCard'

import '../styles/order.css';

class Order extends Component {
  onOpenCheckChange = (selectedTable) => {
    this.props.loadNewCheckConnect(selectedTable)
  }

  onCloseCheckChange = (selectedCheck) => {
    // this.props.selectTableConnect(selectedCheck)
  }

  onAddMenuItemChange = (item) => {
    console.log(item)
    // this.props.addCheckItemConnect(item)
  }

  renderMenuItems = () => {
    const menu = this.props.menu.map((item, index) =>
      <li key={index}>
        <div className="menu-item">
        <div className="menu-button">
        {!this.props.selectedCheck ? '' : <button onClick={() => this.onAddMenuItemChange(item)}>Add Item</button>}
        </div>
          <h2>{item.name} - ${item.price}</h2>
        </div>
      </li>
    )
    return menu;
  }

  renderOrderItems = () => {
    if(!this.props.selectedCheck) {
      return '';
    }

    const order = this.props.selectedCheck.orderedItems.map((item, index) =>
      <li key={index}>
        {item.name}
      </li>
    )
    return order;
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
      <div className="order-container row">
        <div className="menu-wrapper column">
          <ul className="menu-list">
            {this.renderMenuItems()}
          </ul>
        </div>
        <div className="order-wrapper column">
          <div className="order-buttons">
            {!this.props.selectedCheck ? <button onClick={() => this.onOpenCheckChange(this.props.selectedTable)}>Open Check</button> : <button onClick={() => this.onCloseCheckChange(this.props.selectedTable)}>Close Check</button>}
          </div>
          <h3>ORDER: Table {this.props.selectedTable.number}</h3>
          <div className="order-items-wrapper">
            <ul className="order-list">
              {this.renderOrderItems()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  menu: state.menu.menu,
  selectedTable: state.tables.selectedTable,
  selectedCheck: state.checks.selectedCheck
})

const mapDispatchToProps = dispatch => ({
  loadChecksConnect: () => dispatch(fetchChecks()),
  loadNewCheckConnect: (table) => dispatch(fetchNewCheck(table))
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)
