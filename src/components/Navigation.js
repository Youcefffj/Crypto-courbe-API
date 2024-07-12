import React from 'react';
import { NavLink } from 'react-router-dom';//NavLink remplace le a de html (lien)

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>acceuil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A propos</li>
                </NavLink>
                <NavLink to="/crypto" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Crypto</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;