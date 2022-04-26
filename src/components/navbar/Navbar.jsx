import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
import Icon from '../../images/onestaff_whiteteal.png'

const Navbar = () => {
  const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    };

  return (
    <div className='navbar'>
        <div className="nav-container">
            <span className="logo" onClick={goHome}><img src={Icon} alt="" className='icon' /></span>
            
            <div className="nav-items">
                <button className='nav-button'>Register</button>
                <button className='nav-button'>Sign In</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar