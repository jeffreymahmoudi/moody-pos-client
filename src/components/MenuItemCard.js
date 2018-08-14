import React from 'react'

import '../styles/menu-item-card.css'

const MenuItemCard = ({item}) => {
  return (
    <div className="menu-item">
      <div className="menu-button"><button onClick={() => alert(item.name + " added...")}>Add</button></div>
        <h2>{item.name} - ${item.price}</h2>
    </div>
  )
}

export default MenuItemCard
