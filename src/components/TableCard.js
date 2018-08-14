import React from 'react'

import '../styles/table-card.css'

const TableCard = ({table}) => {
  return (
    <div className="table-card">
      <h3 className="table-number">{table.number}</h3>
    </div>
  )  
}

export default TableCard
