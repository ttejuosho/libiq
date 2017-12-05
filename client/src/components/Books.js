import React, { Component } from "react";
import '../App.css';
import LibiqLogo from '../images/LibiqLogo2.jpg';
import LibiqWordLogo from '../images/LibiqWordLogo.png';
import Footer from './Footer.js';
import API from "../utils/API"
import helpers from "../utils/helpers"
import DueBooks from './DueBooks.js';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


class AddBookForm extends Component {
    // constructor() {
    //     super()
        state = {
            bookTitle:"",
            dueDate: moment(),
            bookAuthor: "",
            bookImg: "",
            books: []
            };
    // }

    handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value })
        }

        handleChange(date){
            this.setState(
                {
                    dueDate:date
                }
            )
        }

        loadBooks = () => {
            API.getBooks()
            .then(res =>this.setState({ books:res.data }))
            .catch(err =>console.log(err));
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
                        
                        <DatePicker
                         selected={this.state.dueDate}
                         onChange={this.handleChange}
                        />
                         <br/>
                        <button
                        type="button" 
                        className="btn"
                        onClick={ this.handleBookFinder}>Search                   
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
            title: "",
            author: "",
            image: "",
            dueBooks:[],
            saving: false,
            gotBooks: true
        }
    }

    
    onSaveClick = (item, e) =>{
        console.log("BuggHere");
     this.setState({

            title: item.volumeInfo.title,
            author: item.volumeInfo.authors,
            image: item.volumeInfo.imageLinks.thumbnail,
            saving: true
     }, () =>{

        let savedBook = {
            
                        title: this.state.title,
                        author: this.state.author,
                        image: this.state.image
                    }
       
        this.state.dueBooks.push(savedBook)
        this.makeBooks(this.state.dueBooks)
        

     })
            
            console.log("hi",item.volumeInfo.title, item.volumeInfo.authors)
        
    }

    makeBooks = (aBook) =>{

        console.log("MakeBOOkS running");
        API.createBooks(aBook)
        .then(console.log(aBook))
        .catch(err=>console.log(err));
    };

    render(){
        // if (this.props.gotBooks){

            return (
                <div>
                <DueBooks savedBooks = {this.state.dueBooks} saving={this.state.saving}/>
                <div className="booksDiv">
                
                <ul>
             
                   {                
                       this.props.books.map((items, i ) => {

                            let boundItemClick = this.onSaveClick.bind(this, items);
                            return (
                                
                                <div key={i} className="resultsDiv">
                                
                                <li>
                                
                                    <img className="bookImg" src={items.volumeInfo.imageLinks.thumbnail} alt=""/>
                               
                                <div className="bookInfo">
                                    <p>{items.volumeInfo.title}</p>
                                    <p>{items.volumeInfo.authors}</p>         
                                    <button type="submit" onClick={boundItemClick} >Save</button>
                                </div>
                                    <br/><br/>
                                </li>
                               
                                </div>
                                
                            )
                       })
                   }
             
                </ul>
             
            </div>
            </div>
                
            )
        // } else {
        //     return (
        //         <div>
        //         <DueBooks savedBooks = {this.state.dueBooks}/>
        //     <div className="booksDiv">
        //         <h6>Enter Book Name to Search</h6>

        //         <h6>Click Here to <a href="">Add a new Book</a></h6>
        //     </div>
        //     </div>

                    
                    
           
        //     )
        // }
    }
}
export default AddBookForm; Books;

