import React from 'react';

export const NavMenuItem = ({title}) => {
    return(
            <li className="navbar-menu-item">
                <button>
                    {title}
                </button>
            </li> 
    );
}