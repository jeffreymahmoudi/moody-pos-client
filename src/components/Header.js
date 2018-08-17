import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/header.css'

export default function Header() {
  return (
    <header role="banner">
      <Link to="/" className="logo">App</Link>
      <nav className="header-right">
        <Link to="/tables">Tables</Link>
        <Link to="/checks">Checks</Link>        
      </nav>
    </header>
  ); 
}
