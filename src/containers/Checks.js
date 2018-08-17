import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchChecks } from "../actions/checkActions";

import "../styles/checks.css";

class ChecksContainer extends Component {
  componentDidMount = () => {
    this.props.loadChecksConnect();
  };

  renderTotal = (check) => {
    let total = 0
      for(let i = 0; i < check.orderedItems.length; i++) {
        total += check.orderedItems[i].price
      }
      return total
  }

  renderOrderedItems = (check) => {
    const items = check.orderedItems.map((item, index) => (
      <React.Fragment>
        <p>{item.name}</p>
        <p>${item.price}.00</p>
      </React.Fragment>
    ))

    return items
  }

  renderResults = () => {
    if (this.props.loading) {
      return <p>Loading checks...</p>;
    }

    if (this.props.error) {
      return <strong>{this.props.error.message}</strong>;
    }

    const checks = this.props.checks.map((check, index) => (      
      // <Link to={`/checks/${check.id}`}>
        <div className="check-order" key={index}>
          <p className="check-id">{check.id}</p>
          <p>{new Date(check.updatedAt).toUTCString()}</p>
          <p>Table: {check.tableId}</p>
          <p>Total: ${this.renderTotal(check)}.00</p>
          <details>
            <summary>Ordered Items</summary>
            {this.renderOrderedItems(check)}
          </details>
        </div>
      // </Link>
    ));

    return checks;
  };

  render() {
    return (
      <div className="checks-container">
        <h1>Checks</h1>
        <div className="checks-wrapper">{this.renderResults()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  checks: state.checks.checks,
  loading: state.checks.loading,
  error: state.checks.error
});

const mapDispatchToProps = dispatch => ({
  loadChecksConnect: () => dispatch(fetchChecks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChecksContainer);
