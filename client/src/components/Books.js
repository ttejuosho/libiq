import React, { Component } from "react";
import '../App.css';
import LibiqLogo from '../images/LibiqLogo2.jpg';
import LibiqWordLogo from '../images/LibiqWordLogo.png';
import Footer from './Footer.js';


class Books extends Component {
    state = {
        bookTitle: "",
        dueDate: ""
            };



    handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value })
        }


    render(){
        return(
            <div>
            <div id="bookheader">
            <nav class="nav">
            <a class="navbar-brand" href="/">
            <img src={LibiqLogo} width="100" height="100" alt="Home" />
            </a>
            </nav>
            </div>
           
            <img className="homelogo" src={LibiqWordLogo} width="176" height="100" alt="Home" />
            <div className="booksDiv">

            </div>
            <div className="formdiv fadeInDown animated">

                <form onSubmit={this.handleBookFinder}>
                
                    <div className="col">
                        <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Enter Book Title"
                        name="bookTitle" 
                        value={this.state.bookTitle} 
                        onChange={this.handleInput} />
                        <br />
                    </div> 
                    
                    <button
                    type="button" 
                    class="btn">Add Book                   
                    </button>

                    <br/>
                    <br/>
            
                </form>
            </div>

            <h6>Click Here to <a href="">Add a new Book</a></h6>
            <Footer />
            </div>
        )}}

export default Books;