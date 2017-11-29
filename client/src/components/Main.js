import React, { Component } from "react";
import '../App.css';
import LibIMG from '../images/libiq1.jpg';
// import {Link} from "react-router"
import Header from './Header.js';

class Main extends Component {
    State = {
        
            };

        render(){
            return(
                <div className="maindiv">
                <Header />
                <div className="imgcontainer">
                <img className="libimg" src={LibIMG} alt="Library" />
                </div>
                <div className="imgleft">
                </div>
                <br />
                <br />
                {this.props.children}
                <button type="button" className="btn"><a href="/signin">Log In</a></button>
                <button type="button" className="btn"><a href="/signup">Get Started</a></button>
                
                </div>
            )
        }
    }


export default Main;