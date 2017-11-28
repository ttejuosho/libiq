import React, { Component } from "react";
import '../App.css';
import LibIMG from '../images/libiq1.jpg';

class Main extends Component {
    State = {
        
            };


        render(){
            return(
                <div className="maindiv">
                <div className="imgcontainer">
                <img className="libimg" src={LibIMG} alt="Library" />
                </div>
                <div className="imgleft">
                </div>
                <br />
                <br />
            
                <button type="button" className="btn">Log In</button>
                <button type="button" className="btn">Get Started</button>
                </div>
            )
        }
    }


export default Main;