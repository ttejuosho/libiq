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
            <nav class="nav">
            <a class="navbar-brand" href="/">
            <img src={LibiqLogo} width="100" height="100" alt="Home" />
            </a>
            </nav>
            </div>
            <div id="header">
            <ul class="nav justify-content-end">
            <li class="nav-item">
            <a class="nav-link" href="/signin">Login</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/signup">Sign Up</a>
            </li>

            </ul>
            </div>
            </div>
            
        )
    }
}

export default Header;