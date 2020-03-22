import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const CHANGE_LOG_URL = "https://github.com/shra1dhar/autocomplete-ts/blob/master/CHANGELOG.md";

const NavBar: React.FC = () => {
  return (
    <nav className="head">
      <Link to="/" className="logo">
        <h3>Autocomplete-Ts</h3>
        <p className="author">by Shravan Dhar</p>
      </Link>
      <div className="side-links">
        <a href={CHANGE_LOG_URL} target="_blank" rel="noopener noreferrer">
          v1.0.0
        </a>
        <Link to="docs">
          Docs
        </Link>
        <Link to="style">
          Styling
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
