import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-container">
            <span className="logo">osmbooking</span>
            <div className="nav-items">
                <button className='nav-button'>Register</button>
                <button className='nav-button'>Sign In</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar