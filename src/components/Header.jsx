import React from "react";
import './Header.css'
import logo from '../assets/logo.svg';

const Header = () => {
    return <header className="App-header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <h5>Liste des relais et balises disponibles en France</h5>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    </header>
}

export default Header