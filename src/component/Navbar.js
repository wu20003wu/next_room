import React, { useState, useEffect } from 'react';
import './navbar.css';
import NavButton from '../component/nav_button'

function Navbar({ loggedInUsername }) { 
  const handleLogout = () => {
    localStorage.removeItem('username'); // Den eingeloggten Benutzernamen aus dem Local Storage entfernen
    window.location.href = "/login"; // Weiterleitung zur "/login"-Seite
  };

  if (!loggedInUsername) {
    return (
      <div className='navbar'>
        <div className='navbar-logo'>
          CashFlow
        </div>
        <ul className='navbar-menu'>
          <li><a href="/">Home</a></li>
          <li><a href="about">Über uns</a></li>
          <li><a href="login">Login</a></li>
        </ul>
      </div>
    );
  }

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        CashFlow
      </div>
      <NavButton/>
      <ul className='navbar-menu'>
        <li><a href="/">Home</a></li>
        <li><a href="about">Über uns</a></li>
        <li>
          <div className='navbar-logout'>
            <span style={{ color: '#ffc800 '}}>{loggedInUsername}</span>
            <button className='logout-button' onClick={handleLogout}>Logout</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;