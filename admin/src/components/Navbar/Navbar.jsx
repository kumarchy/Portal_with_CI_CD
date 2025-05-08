import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ showSideBar,}) => {
  const [showBar, setShowBar] = useState(false);

  const handleSidebarToggle = () => {
    setShowBar(!showBar);
    showSideBar(!showBar); 
  };

  return (
    <div className='navbar'>
      <div className='navbarLogoContainer'>
        {showBar ? (
          <FaTimes className='bar' onClick={handleSidebarToggle} />
        ) : (
          <FaBars className='bar' onClick={handleSidebarToggle} />
        )}
        <img className='logo' src={assets.logo} alt='Logo' />
      </div>
      <img className='profile' src={assets.profile_image} alt='Profile' />
    </div>
  );
};

export default Navbar;
