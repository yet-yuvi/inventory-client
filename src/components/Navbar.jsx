import React from 'react';

function Navbar() {
    return(
      <div className="navbar">
        <div className="navbar-logo">
          <h1>Logo</h1>
        </div>
        <div className="navbar-menu">
          <ul>
            <li className="navbar-menu-item">Learn</li>
            <li className="navbar-menu-item">Referance</li>
            <li className="navbar-menu-item">Community</li>
            <li className="navbar-menu-item">Blog</li>
          </ul>
        </div>
      </div>
    );
  }

  export default Navbar;