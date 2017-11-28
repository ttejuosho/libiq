import React, { Component } from "react";
import '../App.css';
import LibiqLogo from '../images/LibiqLogo2.jpg';
import LibiqWordLogo from '../images/LibiqWordLogo.png';

class Signup extends Component {
    state = {
            name: "",
            email: "",
            password: ""
            };

    
    handleInput = (event) => {
        this.setState({
            name: event.target.value,
            email: event.target.value,
            password: event.target.value });
      
    }

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
                    placeholder="Login Name"
                    name="name" 
                    value={this.state.name} 
                    onChange={this.handleInput} />
                    <br />
                    </div> 
                    <div class="col">
                    <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Email"
                    name="email" 
                    value={this.state.email}
                    onChange={this.handleInput}  />
                    <br />
                    </div>
                    <div class="col">
                    <input 
                    type="password" 
                    class="form-control" 
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInput}  />
                    <br />
                    </div> 
                    <div class="col">
                    <input 
                    type="password" 
                    class="form-control" 
                    placeholder="Confirm Password"
                    name= "password"
                    value={this.state.password} 
                    onChange={this.handleInput} />
                    <br />
                    <button type="button" class="btn">Sign Up</button>
                    <br/>
                    <br/>
                    <h6>Already have an account? <a href="">Log in Here</a></h6>
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