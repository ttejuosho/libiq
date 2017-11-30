import React, { Component } from "react";
import '../App.css';
import LibiqLogo from '../images/LibiqLogo2.jpg';
import LibiqWordLogo from '../images/LibiqWordLogo.png';

class Books extends Component {
    State = {
        
            };


    render(){
        return(
            <div>
            <div id="bookheader">
            <nav class="nav">
            <a class="navbar-brand" href="#">
            <img src={LibiqLogo} width="100" height="100" alt="Home" />
            </a>
            </nav>
            </div>
           
            <img className="homelogo" src={LibiqWordLogo} width="176" height="100" alt="Home" />
            <div className="books">
            </div>
            <h6>Click Here to <a href="">add a Book</a></h6>
           
            </div>
        )}}

export default Books;