import React from 'react'

import './tablecard.css'

const TableCard = (props) => {
  return (
    <div className="table-card">
      <h3 className="table-number">{props.table.number}</h3>
    </div>
  )  
}

export default TableCard
