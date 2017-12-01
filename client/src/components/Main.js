import React, { Component } from "react";
import '../App.css';
import LibiqLogo from '../images/LibiqLogo2.jpg';
import logo from '../logo.svg';
import LibIMG from '../images/libiq1.jpg';
import Footer from './Footer.js';



class Main extends Component {
    state = {
        
            };

    render() {
        return (
            <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>LibiQ - Built With React</h2>
            </div>
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
                <div className="imgcontainer">
                <img className="libimg" src={LibIMG} alt="Library" />
                </div>
                <div className="imgleft">
                </div>
                <br />
                <br />
    
            <button type="button" className="btn"><a href="/signin">Log In</a></button>
            <button type="button" className="btn"><a href="/signup">Get Started</a></button>
            </div>
            <Footer />
            </div>
        );
        }
    }


export default Main;