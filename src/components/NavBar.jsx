import React from 'react';
import { Link } from 'react-router-dom'; // Import for routing
import '../CSS/NavBar.css';
import logo from '../images/SCNet Logo 2024 Paths w.png'; // Assuming logo is in the same directory as NavBar.js
import Login from './Login';

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Logo Image */}
      <Link to="/"> {/* Link to root path (usually Home) */}
        <img src={logo} alt="Company Logo" className="logo" />
      </Link>
      {/* Navigation Links */}
      <div className='navbar-links'> {/* Wrap the links */}
      <Login/>
      <Link to="/" className="navbar-link">Home</Link> {/* Adjusted link to root */}
      
      <Link to="/Map" className="navbar-link">SA Map Stats</Link>
      <Link to="/DataTable" className="navbar-link">Health Report</Link>
      </div>
    </nav>
  );
};

export default NavBar;

