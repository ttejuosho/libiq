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
                {/* <Header />
                <div className="imgcontainer">
                <img className="libimg" src={LibIMG} alt="Library" />
                </div>
                <div className="imgleft"> */}
                {/* This code will allow us to automatically dump the correct GrandChild component */}
              {this.props.children}
                {/* </div> */}
                <br />
                <br />
            
                </div>
            )
        }
    }


export default Main;