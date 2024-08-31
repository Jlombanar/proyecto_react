import React from "react";
import { Link } from 'react-router-dom';
import logo from './assets/logo.png'
import './Navbar.css'


function Navbar(){
    return(
        <div className="Navbar">
          <nav role=" navigation" aria-label="Main navigation" >
            <img src={logo} alt=" logo" />
            <ul>
                <li>
                    <strong> Jimmy Lombana</strong>
                    </li>
                    <li>
                    <Link to="/"> Home</Link>
                    </li>
                    <li>
                    <Link to="/Login"> Login</Link>
                    </li>
                    <li>
                    <Link to="/Sitios"> Sitios</Link>
                 </li>
                
            </ul>


            </nav>
            <div className="Search -box">
                <input type="text" placeholder="Buscar" />

            </div>
        </div>
    )
}
export default Navbar;