import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchTables, selectTable } from '../actions/tableActions'
import TableCard from '../components/TableCard'

import '../styles/tables.css'

class TablesContainer extends Component {
  componentDidMount = () => {
    // this.props.loadTablesConnect()
  }
  
  onSelectedTableChange = (selectedTable) => {
    this.props.selectTableConnect(selectedTable)
  }

  renderResults = () => {
    if (this.props.loading) {
      return <p>Loading tables...</p>;
    }

    if (this.props.error) {
      return <strong>{this.props.error.message}</strong>;
    }

    const tables = this.props.tables.map((table, index) =>
      <Link
        to={`/order`}
        onClick={() => this.onSelectedTableChange(table)}
        key={index}
      >
        <TableCard table={table} />
      </Link>
    );

    return tables;
  }

  render() {
    return (
      <div className="tables-container">
        {this.renderResults()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tables: state.tables.tables,
  loading: state.tables.loading,
  error: state.tables.error
});

const mapDispatchToProps = dispatch => ({
  loadTablesConnect: () => dispatch(fetchTables()),
  selectTableConnect: (table) => dispatch(selectTable(table))
});

export default connect(mapStateToProps, mapDispatchToProps)(TablesContainer)
