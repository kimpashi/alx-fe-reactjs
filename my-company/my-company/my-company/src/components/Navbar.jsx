import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 22px',
    background: '#0f172a',
    color: '#fff',
    boxShadow: '0 2px 8px rgba(15,23,42,0.08)'
  }

  const brandStyle = { fontWeight: 700, letterSpacing: '0.6px' }
  const linksWrap = { display: 'flex', gap: '10px', alignItems: 'center' }
  const linkBase = {
    padding: '8px 12px',
    borderRadius: 8,
    textDecoration: 'none',
    color: '#fff',
    fontSize: '14px',
    transition: 'all 0.15s ease'
  }
  const activeStyle = { background: '#fff', color: '#0f172a', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }

  return (
    <nav style={navStyle}>
      <div style={brandStyle}>My Company</div>
      <div style={linksWrap}>
        <NavLink to="/" style={({isActive}) => (isActive ? {...linkBase, ...activeStyle} : linkBase)}>Home</NavLink>
        <NavLink to="/about" style={({isActive}) => (isActive ? {...linkBase, ...activeStyle} : linkBase)}>About</NavLink>
        <NavLink to="/services" style={({isActive}) => (isActive ? {...linkBase, ...activeStyle} : linkBase)}>Services</NavLink>
        <NavLink to="/contact" style={({isActive}) => (isActive ? {...linkBase, ...activeStyle} : linkBase)}>Contact</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
