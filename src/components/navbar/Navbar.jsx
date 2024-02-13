import React from 'react';
import { NavMenuItem } from './NavMenuItem';

import './Navbar.css';

export function Navbar() {

    const navItems = ['Home', 'Contact', 'Blog'];
    const isAuthenticated = false;

    return(
      <div className="navbar">
        <div className="navbar-logo">
          <h1>Logo</h1>
        </div>
        <div className="navbar-menu">
            {
              navItems.map((navItem) => {
                return(<NavMenuItem key={navItem} title={navItem} />);
              })
            }
            {
              isAuthenticated ? <button>Logout</button> : <button>Login</button>
            }
        </div>
      </div>
    );
  };
