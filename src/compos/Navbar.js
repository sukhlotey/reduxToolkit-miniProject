import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbarr">
    <ul className="navbarr-nav">
      <li className="navv-item">
        <NavLink to="/" className="navv-link">Home</NavLink> 
      </li>
      <li className="navv-item">
        <NavLink to="/display" className="navv-link">Display</NavLink> 
      </li>
    </ul>
  </div>
  );
}

export default Navbar;
