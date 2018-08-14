import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header role="banner">
      <Link to="/" className="logo">App</Link>
      <nav className="header-right">
        <Link to="/tables">Tables</Link>
        <Link to="/landing">Landing</Link>
      </nav>
    </header>
  ); 
}
