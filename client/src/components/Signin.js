import React, { Component } from "react";
import '../App.css';
import LibiqLogo from '../images/LibiqLogo2.jpg';
import LibiqWordLogo from '../images/LibiqWordLogo.png';

class Signin extends Component {
    state = {
            email: "",
            password: ""
            };

    handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
                [name]: value
                });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        
    }

    render(){
        return(
            <div id="signupdiv">
            <img className="signuplogo" src={LibiqLogo} width="100" height="100" alt="Home"/><br />
            <img className="signuplogo" src={LibiqWordLogo} width="176" height="100" alt="Word"/>
            <div className="formdiv">

                <form onSubmit={this.handleSubmit}>
                
                    <div class="col">
                    <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Email"
                    name="Email" 
                    value={this.state.email} 
                    onChange={this.handleInput} />
                    <br />
                    </div> 
                    <div class="col">
                    <input 
                    type="password" 
                    class="form-control" 
                    placeholder="Password"
                    name="email" 
                    value={this.state.password}
                    onChange={this.handleInput}  />
                    <br />
                    </div>
                    <div class="col">
                   
                    <br />
                    <button type="button" class="btn">Log In</button>
                    <br/>
                    <br/>
                    
                    </div>
                
            </form>
            </div>
            <br />
            <br />
        </div>

        )
    }
}


export default Signin;