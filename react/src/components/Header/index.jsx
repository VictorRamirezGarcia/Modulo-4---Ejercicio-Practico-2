// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Usamos Link para la navegación

const Header = () => {
return (
    <header>
    <nav>
        <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/medical-team">Medical Team</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
    </header>
);
};

export default Header;
