import React from 'react';
import Button from '../Header/Button';
import CartWidget from '../Header/CartWidget';
import Logo from '../../img/logo.png'
import "../Header/Navbar.css"



function Navbar() {
    return (
        <nav className="navbar">
            <img src={Logo} alt="" />
            <h1>Spc</h1>
            <ul>
                <li>Productos</li>
                <li>Nosotros</li>
                <li><CartWidget/></li>
                <li><Button text="Logueo" /></li>
            </ul>

        </nav>
    )
}

export default Navbar