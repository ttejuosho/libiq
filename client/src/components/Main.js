import React, { Component } from "react";
import '../App.css';
import LibIMG from '../images/libiq1.jpg';

class Main extends Component {
    
        render(){
            return(
                <div class="maindiv">
                <div class="imgcontainer">
                <img class="libimg" src={LibIMG} alt="Library" />
                </div>
                <div class="imgleft">
                </div>
                {/* <div class="imgright">
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
            
                <button type="button" class="btn">Log In</button>
                <button type="button" class="btn">Get Started</button>
                </div>
            )
        }
    }


export default Main;