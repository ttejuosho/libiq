import React, { Component } from "react";
import '../App.css';
import LibiqLogo from '../images/LibiqLogo2.jpg';


class Header extends Component {
    state = {

    };

    
    render(){
        return(
            <div>
            <div id="home">
            <nav className="nav">
            <a className="navbar-brand" href="/">
            <img src={LibiqLogo} width="100" height="100" alt="Home" />
            </a>
            </nav>
            </div>
            <div id="header">
            <ul className="nav justify-content-end">
            <li className="nav-item">
            <a className="nav-link" href="/signin">Login</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/signup">Sign Up</a>
            </li>

            </ul>
            </div>
            </div>
            
        )
    }
}

export default Header;