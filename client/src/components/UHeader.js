import React, { Component } from "react";
import '../App.css';
import LibiqLogo from '../images/LibiqLogo2.jpg';
import LibiqWordLogo from '../images/LibiqWordLogo.png';



class UHeader extends Component {
    
    
        render(){
            return (
                <div>
                    <div id="bookheader">
                        <nav className="nav">
                        <a className="navbar-brand" href="/">
                        <img src={LibiqLogo} width="100" height="100" alt="Home" />
                        </a>
                        </nav>
                        </div>
                            <div>
                            <img className="homelogo" src={LibiqWordLogo} width="176" height="100" alt="Home" />
                </div>
                </div>
            )
        }
    }
    export default UHeader;