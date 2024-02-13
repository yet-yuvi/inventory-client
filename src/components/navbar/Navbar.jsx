import React from 'react';
import { NavMenuItem } from './NavMenuItem';

export function Navbar() {
    return(
      <div className="navbar">
        <div className="navbar-logo">
          <h1>Logo</h1>
        </div>
        <div className="navbar-menu">
          <ul>
            <NavMenuItem title="Learn" />
            <NavMenuItem title="Learn" />
            <NavMenuItem title="Learn" />
            <NavMenuItem title="Learn" />
          </ul>
        </div>
      </div>
    );
  }
