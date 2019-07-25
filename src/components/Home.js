import React from 'react';
import { NavLink } from "react-router-dom";

const Home = () => {
    return (  
        <div className="row justify-content-center inicio">
            <div className="col-8 ">
                <NavLink to="/climas" className="btn btn-secondary btn-block ">
                    Entrar al Test
                </NavLink>
            </div>
        </div>
    );
}
 
export default Home;