import React, { Component } from "react";
import '../App.css';
import '../animate.css';
import FormErrors from '../FormErrors.js'
import LibiqLogo from '../images/LibiqLogo2.jpg';
import LibiqWordLogo from '../images/LibiqWordLogo.png';
import Footer from './Footer.js';
import API from "../utils/API"

class Signup extends Component {
    state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            formErrors: {name: "", email: "", password: "",confirmPassword:""}, 
            nameValid: false,    
            emailValid: false,
            passwordValid: false,
            confirmPasswordValid: false,
            formValid: false
            };

    handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value},
                        () => { this.validateField(name, value) });
        }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
    
        switch(fieldName) {
            case 'name':
            nameValid = value.length >= 6;
            fieldValidationErrors.name = nameValid ? '' : ' is invalid';
            break;
            case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
            case 'password':
            passwordValid = value.length >= 8;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
            default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        nameValid: nameValid,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                        }, this.validateForm);
        }
    
        validateForm() {
        this.setState({formValid: 
            this.state.nameValid && 
            this.state.emailValid && 
            this.state.passwordValid });
        }
    
        errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
        }
        
        handleSubmit = event => {
            event.preventDefault();
            console.log(`
                    name: ${this.state.name}
                    email: ${this.state.email}
                    password: ${this.state.password}
                    confirmPassword: ${this.state.confirmPassword}
            `);

            // Grab Name & Email and creat newUser Object
            const newUser = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            };

            API.create(newUser)
               .then(result => console.log("created New User", newUser));


               this.setState({ name: "", email: "", password: "", confirmPassword: "" })
        }


    render(){
        return(
            <div>
                
            <div className="imgdiv">
            <a href="/"><center><img className="signuplogo fadeInDown animated" src={LibiqLogo} width="100" height="100" alt="Home"/></center></a><br />
            <center><img className="signuplogo fadeInDown animated" src={LibiqWordLogo} width="176" height="100" alt="Word"/></center>
            </div>

            <div className="formdiv fadeInDown animated">

                <form onSubmit={this.handleSubmit}>
                
                    <div className={`col ${this.errorClass(this.state.formErrors.name)}`}>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Login Name"
                    name="name" 
                    value={this.state.name} 
                    onChange={this.handleInput} />
                    <br />
                    </div> 

                    <div className={`col ${this.errorClass(this.state.formErrors.email)}`}>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Email"
                    name="email" 
                    value={this.state.email}
                    onChange={this.handleInput}  />
                    <br />
                    </div>

                    <div className={`col ${this.errorClass(this.state.formErrors.password)}`}>
                    <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInput}  />
                    <br />
                    </div> 

                    <div className={`col ${this.errorClass(this.state.formErrors.confirmPassword)}`}>
                    <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Confirm Password"
                    name= "confirmPassword"
                    value={this.state.confirmPassword} 
                    onChange={this.handleInput} 
                    />
                    <small id="passwordHelpBlock" className="form-text text-muted">
                    Your password must be 8-20 characters long.
                    </small>

                    <br />
                    <center><button 
                    disabled={!this.state.formValid} 
                    type="button" 
                    className="btn"
                    onClick={ this.handleSubmit.bind(this)} >Sign Up</button>
                    <br/>
                    <br/>
                    
                    <h6>Already have an account? <a href="/signin">Log in Here</a></h6></center>
                
                </div>
                
            </form>
            
            </div>
            <br />
            <br />
            
            
            <Footer />
            
        </div>

        )
    }
}


export default Signup;