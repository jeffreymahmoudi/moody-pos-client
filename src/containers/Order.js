import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { fetchChecks, fetchNewCheck, fetchAddCheckItem, fetchTableCheck, fetchCloseCheck } from '../actions/checkActions'
import MenuItemCard from '../components/MenuItemCard'

import '../styles/order.css';

class Order extends Component {
  componentDidMount = () => {
    this.props.loadTableCheckConnect(this.props.selectedTable)
  }

  onOpenCheckChange = (selectedTable) => {
    this.props.loadNewCheckConnect(selectedTable)
  }

  onAddCheckItemChange = (check, item) => {
    this.props.loadAddCheckItemConnect(check, item)
  }

  onCloseCheckChange = (selectedCheck) => {
    this.props.loadCloseCheckConnect(selectedCheck)
  }


  renderMenuItems = () => {
    const menu = this.props.menu.map((item, index) =>
      <li key={index}>
        <div className="menu-item">
        <div className="menu-button">
        {!this.props.selectedCheck || this.props.selectedCheck.closed ? '' : <button onClick={() => this.onAddCheckItemChange(this.props.selectedCheck, item)}>Add Item</button>}
        </div>
          <h2>{item.name} - ${item.price}</h2>
        </div>
      </li>
    )
    return menu;
  }

  renderCheckButtons = () => {
    if(!this.props.selectedCheck) {
      return (
        <button onClick={() => this.onOpenCheckChange(this.props.selectedTable)}>Open Check</button>
      )
    } else {
      if(!this.props.selectedCheck.closed) {
        return (
          <button onClick={() => this.onCloseCheckChange(this.props.selectedCheck)}>Close Check</button>
        )
      } else {
        return (
          <span>Check closed</span>
        )
      }
    }
  }

  renderOrderItems = () => {
    if(!this.props.selectedCheck || this.props.selectedCheck.orderedItems < 1) {
      return (
        <li>Order is empty</li>        
      );
    }

    const order = this.props.selectedCheck.orderedItems.map((item, index) =>
      <li key={index}>
        <span className="item-price">${item.price}.00</span> <span className="item-name">{item.name}</span>
      </li>
    )
    return order;
  }

  renderTotal = () => {
    if(!this.props.selectedCheck || this.props.selectedCheck.orderedItems < 1) {
      return (
        <span>Total: $0.00</span>
      )
    }
    else {
      let total = 0;
      for(let i = 0; i < this.props.selectedCheck.orderedItems.length; i++) {
        total += this.props.selectedCheck.orderedItems[i].price
      }
      return (
        <span>Total: ${total}.00</span>
      )
    }
  }
  
  render() {
    if(!this.props.selectedTable) {
      return (
        <Redirect to='/' />
      )
    }

    return (
      <div className="order-container">
        <div className="row">
          <div className="column">
            <div className="menu-wrapper">
              <ul className="menu-list">
                {this.renderMenuItems()}
              </ul>
            </div>
          </div>          
          <div className="column">
            <div className="check-wrapper">
              <div className="check-buttons">
                {this.renderCheckButtons()}
              </div>
              <h3>ORDER: Table {this.props.selectedTable.number}</h3>
              <div className="check-items-wrapper">
                <ul className="check-list">
                  {this.renderOrderItems()}
                </ul>
                <hr />
                {this.renderTotal()}
              </div>
            </div>
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
  loadTableCheckConnect: (table) => dispatch(fetchTableCheck(table)),
  loadNewCheckConnect: (table) => dispatch(fetchNewCheck(table)),
  loadAddCheckItemConnect: (check, item) => dispatch(fetchAddCheckItem(check, item)),
  loadCloseCheckConnect: (check) => dispatch(fetchCloseCheck(check))
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)
