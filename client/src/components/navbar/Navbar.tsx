import React from 'react';
import { Link } from "react-router";

import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <h3>Library</h3>
      <nav>
        <ul>
          <li><Link to="/books/1">Books</Link></li>
          <li><Link to="/">About</Link></li>
        </ul>
      </nav>
    </header>
    );
};

export default Navbar;