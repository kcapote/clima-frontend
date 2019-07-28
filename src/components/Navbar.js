import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink to="/home" className="navbar-brand" >Climas</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item " activeclassname="active" >
                        <NavLink to="/climas" className="nav-link"> Climas</NavLink>
                    </li>
                    <li className="nav-item " activeclassname="active" >
                        <NavLink to="/mapa" className="nav-link"> Mapa</NavLink>
                    </li>
                    <li className="nav-item" activeclassname="active">
                        <NavLink to="/logs" className="nav-link" >Errores</NavLink>
                    </li>                
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;
