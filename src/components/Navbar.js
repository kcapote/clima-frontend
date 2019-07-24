import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="" className="navbar-brand" >Climas</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item " activeclassname="active" >
                        <NavLink to="/home" className="nav-link"> Home</NavLink>
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
