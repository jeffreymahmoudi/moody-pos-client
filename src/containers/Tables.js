import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTables, selectTable } from '../actions/tableActions'

class Tables extends Component {
  componentDidMount = () => {
    this.props.loadTablesConnect()
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
      <li key={index}>
        <Link
        to={`/order/${table.id}`}
        onClick={() => this.onSelectedTableChange(table)}
        >
          Table {table.number}
        </Link>
      </li>
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
  loadTablesConnect: () => dispatch(fetchTables()),
  selectTableConnect: (table) => dispatch(selectTable(table))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tables)
