import React, { Component } from "react";
import '../App.css';
import LibiqLogo from '../images/LibiqLogo2.jpg';
import LibiqWordLogo from '../images/LibiqWordLogo.png';
import Footer from './Footer.js';
import API from "../utils/API"
import helpers from "../utils/helpers"



class AddBookForm extends Component {
    // constructor() {
    //     super()
        state = {
            bookTitle:"",
            dueDate: "",
            bookAuthor: "",
            bookImg: "",
            books: [],
            gotBooks: false
            };
    // }

    handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value })
        }

        loadBooks = () => {
            API.getBooks()
            .then(res =>this.setState({ books:res.data }))
            .catch(err =>console.log(err));
        };
    
        makeBooks = (aBook, e) =>{
            API.createBooks(aBook)
            .then(console.log(aBook))
            .catch(err=>console.log(err));
        };
    
        
        handleBookFinder = (props) => {
            console.log("Searching Book: ", this.state.bookTitle);
    
            // Query to run book search in Books API
            helpers.runQuery(this.state.bookTitle)
                   .then(res => { 
                       this.setState({ gotBooks: true, books: res.data.items })
                   })
                   .then(res => {
                       console.log(this.state.books)
                   })
                   .catch(err => {
                       console.log(err)
                   })

            }

    render(){
            return (
                <div>
                <div id="bookheader">
                        <nav className="nav">
                        <a className="navbar-brand" href="/">
                        <img src={LibiqLogo} width="100" height="100" alt="Home" />
                        </a>
                        </nav>
                        </div>
                            <div>
                            <img className="homelogo" src={LibiqWordLogo} width="176" height="100" alt="Home" />
                </div>
                <Books gotBooks={this.state.gotBooks} books={this.state.books} />
                
                <div className="formdiv">
   
                    <form onSubmit={this.handleBookFinder}>
                  
                        <div className="col">
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter Book Title"
                            name="bookTitle" 
                            value={this.state.bookTitle} 
                            onChange={this.handleInput} />
                            <br />
                        </div> 
                        
                        <button
                        type="button" 
                        className="btn"
                        onClick={ this.handleBookFinder}>Add Book                   
                        </button>
    
                        <br/>
                        <br/> 

                    </form>
                    
                </div>
                <Footer />
                </div>
            )
        }
        }




class Books extends Component {
    
    constructor() {
        super();
        this.state = {
            // showReply: false
        }
    }

    makeBooks = (aBook, e) =>{
        API.createBooks(aBook)
        .then(console.log(aBook))
        .catch(err=>console.log(err));
    };

    render(){
        if (this.props.gotBooks){
            return (
                
                <div className="booksDiv">
                <ul>
             
                   {
                       this.props.books.map((items, i ) => {
                          
                            return (
                                <div className="resultsDiv">
                                <li key={i} >
                                
                                    <img className="bookImg" src={items.volumeInfo.imageLinks.thumbnail} />
                               
                                <div className="bookInfo">
                                    <p>{items.volumeInfo.title}</p>
                                    <p>{items.volumeInfo.authors[0]}</p>            
                                    <button onClick={this.makeBooks ({ title: items.volumeInfo.title, author: items.volumeInfo.authors[0] }) } >Save</button>
                                </div>
                                    <br/><br/>
                                </li>
                                </div>
                            )
                       })
                   }
             
                </ul>
             
            </div>
                
            )
        } else {
            return (
                

            <div className="booksDiv">
                <h6>Enter Book Name to Search</h6>

                <h6>Click Here to <a href="">Add a new Book</a></h6>
            </div>

                    
                    
           
            )
        }
    }
}
export default AddBookForm;