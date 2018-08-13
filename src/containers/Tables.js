import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTables } from '../actions/tableActions'

class Tables extends Component {
  componentDidMount = () => {
    this.props.loadTablesConect()
  }

  renderResults = () => {
    if (this.props.loading) {
      return <p>Loading tables...</p>;
    }

    if (this.props.error) {
      return <strong>{this.props.error}</strong>;
    }

    const tables = this.props.tables.map((table, index) =>
      <li key={index}>Table {table.number}</li>
    );

    return tables;
  }

  render() {
    return (
      <ul className='tables'>
      {this.renderResults()}
    </ul>    
    )
  }
}

const mapStateToProps = state => ({
  tables: state.tables.tables,
  loading: state.tables.loading,
  error: state.tables.error
});

const mapDispatchToProps = dispatch => ({
  loadTablesConect: () => dispatch(fetchTables())
});

export default connect(mapStateToProps, mapDispatchToProps)(Tables)
