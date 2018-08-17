import React from 'react'

import '../styles/table-card.css'

const TableCard = ({table}) => {
  return (
    <div className="table-card">
      <h4 className="table-number">Table {table.number}</h4>
    </div>
  )  
}

export default TableCard
