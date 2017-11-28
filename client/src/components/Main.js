import React, { Component } from "react";
import '../App.css';
import LibIMG from '../images/libiq1.jpg';

class Main extends Component {
    
        render(){
            return(
                <div className="maindiv">
                <div className="imgcontainer">
                <img className="libimg" src={LibIMG} alt="Library" />
                </div>
                <div className="imgleft">
                </div>
                {/* <div className="imgright">
                <form>
                    
                        <div class="col">
                        <input type="text" class="form-control" placeholder="First Name Last Name" />
                        <br />
                        </div> 
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Email" />
                        <br />
                        </div>
                        <div class="col">
                        <input type="password" class="form-control" placeholder="Password" />
                        <br />
                        </div> 
                        <div class="col">
                        <input type="password" class="form-control" placeholder="Confirm Password" />
                        <br />
                        <button type="button" class="btn">Sign Up</button>
                        </div>
                   
                </form>
                </div> */}
                <br />
                <br />
            
                <button type="button" className="btn">Log In</button>
                <button type="button" className="btn">Get Started</button>
                </div>
            )
        }
    }


export default Main;