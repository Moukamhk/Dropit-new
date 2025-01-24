import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ openLogin, openSignup }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="user-settings">
        <img className="user-img" src="/images/users/default-user.jpg" alt="" />
        <div className="dropdown">
          <button onClick={toggleDropdown}>Join Us</button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <a href="#" onClick={openLogin}>Login</a>
              <a href="#" onClick={openSignup}>Sign Up</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;