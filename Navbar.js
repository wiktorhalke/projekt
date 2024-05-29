import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">TicketBooking</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/sports">Sports</Link></li>
        <li><Link to="/concerts">Concerts</Link></li>
        <li><Link to="/others">Others</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;