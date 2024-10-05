// NavButton.js

import React, { useState } from 'react';
import VerticalNavbar from './vertical_nav';
import { IoMdMenu } from 'react-icons/io';
import '../component/ver_nav.css';

const NavButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="nav-button-container">
      <button onClick={toggleNavbar}><IoMdMenu /></button>
      {isOpen && <VerticalNavbar />}
    </div>
  );
}

export default NavButton;