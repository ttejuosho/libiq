import React, { Component } from "react";
import '../App.css';
import '../animate.css';
import LibiqLogo from '../images/LibiqLogo2.jpg';
import LibiqWordLogo from '../images/LibiqWordLogo.png';
import Footer from './Footer.js';


class Signin extends Component {
    state = {
            email: "",
            password: "",
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
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
            let emailValid = this.state.emailValid;
            let passwordValid = this.state.passwordValid;
        
            switch(fieldName) {
              case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
              case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
              default:
                break;
            }
            this.setState({formErrors: fieldValidationErrors,
                            emailValid: emailValid,
                            passwordValid: passwordValid
                          }, this.validateForm);
          }
        
          validateForm() {
            this.setState({formValid: this.state.emailValid && this.state.passwordValid});
          }
        
          errorClass(error) {
            return(error.length === 0 ? '' : 'has-error');
          }
        
          login = (event) => {
            event.preventDefault();

            console.log(`
            email: ${this.state.email}
            password: ${this.state.password}
    `);

            this.setState({ email: "", password:"" })
          }

    render(){
        return(
          <div>
           <a href="/"><center><img className="signuplogo fadeInDown animated" src={LibiqLogo} width="100" height="100" alt="Home"/></center></a><br />
           <center><img className="signuplogo fadeInDown animated" src={LibiqWordLogo} width="176" height="100" alt="Word"/></center>
            <div className="formdiv fadeInDown animated">

                <form onSubmit={this.handleSubmit}>
                
                    <div className={`col ${this.errorClass(this.state.formErrors.email)}`}>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Email"
                    name="email" 
                    value={this.state.email} 
                    onChange={this.handleInput} />
                    <br />
                    </div> 
                    
                    <div className={`col ${this.errorClass(this.state.formErrors.email)}`}>
                    <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Password"
                    name="password" 
                    value={this.state.password}
                    onChange={this.handleInput}  />
                    <br />
                    </div>
                    
                    <div class="col">
                   
                    <br />
                    <center><a><button 
                    disabled={!this.state.formValid}
                    onClick={this.login.bind(this)}
                    type="button"
                    href="localhost:3000/books" 
                    className="btn">Log In</button></a>
                    <br/>
                    <br/>
                    
                    <h6>Not a member yet? <a href="/signup">Sign Up Here</a></h6></center>
                    </div>
                
            </form>
            </div>
            <br />
            <br />
            <div className="push"></div>
            <Footer />
        </div>

        )
    }
}


export default Signin;