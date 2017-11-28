import React, { Component } from "react";
import '../App.css';
import LibiqLogo from '../images/LibiqLogo2.jpg';
import LibiqWordLogo from '../images/LibiqWordLogo.png';

class Signup extends Component {
    State = {
        
            };

            
    render(){
        return(
            <div id="signupdiv">
            <img className="signuplogo" src={LibiqLogo} width="100" height="100" alt="Home"/><br />
            <img className="signuplogo" src={LibiqWordLogo} width="176" height="100" alt="Word"/>
            <div className="formdiv">
                <form>
                
                    <div class="col">
                    <input type="text" class="form-control" placeholder="Login Name" />
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
                    <h3></h3>
                    </div>
                
            </form>
            </div>
            <br />
            <br />
        </div>

        )
    }
}


export default Signup;