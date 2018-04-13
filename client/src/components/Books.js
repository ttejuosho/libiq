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
        bookTitle: "",
        dueDate: moment(),
        bookAuthor: "",
        bookImg: "",
        books: [],
        date: null,
        show_books: true
    };
    // }

    handleInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value })
    }

    handleChange = (date) => {
        let dueDate = moment(date).from(moment())
        this.setState({
            dueDate: dueDate,
            date: date
        })

    }

    handleColor = (props) => {
        if (this.dueDate.diff(moment()) < 3) {
            //change color               
        }
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    };



    handleBookFinder = () => {
        console.log("Searching Book: ", this.state.bookTitle);
        // Query to run book search in Books API
        helpers.runQuery(this.state.bookTitle)
            .then(res => {
                console.log('fired');
                this.setState({ gotBooks: true, books: res.data.items, show_books: true })
            })
            .then(res => {
                console.log(this.state.books)
            })
            .catch(err => {
                console.log(err)
            })

    }

    setBookState(state) {
        this.setState({ show_books: state });
    }

    render() {
        return (
            <div>
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
                    <div>
                    <nav className="navi">
                    <a className="nav-link" href="/">ttejuosho</a>
                    </nav>
                    </div>
                    <div className="formdiv">

                        <form onSubmit={this.handleBookFinder}>

                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Book Title"
                                    name="bookTitle"
                                    value={this.state.bookTitle}
                                    onChange={this.handleInput.bind(this)} />
                                <br />
                            </div>
                            <p>Click below to choose due date</p>
                            <DatePicker
                                name="dueDate"
                                selected={this.state.date}
                                onChange={this.handleChange}
                            />
                            <br />
                            <button
                                type="button"
                                className="btn"
                                onClick={this.handleBookFinder}>Search
                        </button>

                            <br />
                            <br />

                        </form>

                    </div>
                    <Books
                        setBookState={this.setBookState.bind(this)}
                        show_books={this.state.show_books}
                        gotBooks={this.state.gotBooks}
                        books={this.state.books}
                        dueDate={this.state.dueDate} />
                </div>

            </div>
        )
    }
}




class Books extends Component {

    constructor() {
        super();
        this.state = {
            // showReply: false
            // title: "",
            // author: "",
            // image: "",

            dueBooks: [],
            saving: false,
            gotBooks: true
        }
    }


    onSaveClick = (item, e) => {

        let savedBook = {
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors,
            image: item.volumeInfo.imageLinks.thumbnail,
            dueDate: this.props.dueDate
        };

        let books = [].concat(this.state.dueBooks);
        books.push(savedBook);

        this.props.setBookState(0);
        this.setState({
            saving: true,
            dueBooks: books
        }, () => {

            this.makeBooks(this.state.dueBooks)


        })

        console.log("hi", item.volumeInfo.title, item.volumeInfo.authors)

    }

    makeBooks = (aBook) => {
        API.createBooks({ books: aBook })
            .then(console.log(aBook))
            .catch(err => console.log(err));
    };

    render() {
        // if (this.props.gotBooks){

        return (
            <div>
                <DueBooks savedBooks={this.state.dueBooks} saving={this.state.saving} dueDate={this.props.dueDate} />
                <div className="booksDiv">
                
                    {this.props.show_books ? (
                        <ul>

                            {
                                this.props.books.map((items, i) => {

                                    let boundItemClick = this.onSaveClick.bind(this, items);
                                    return (

                                        <div key={i} className="resultsDiv">

                                            <li>

                                                <img className="bookImg" src={items.volumeInfo.imageLinks.thumbnail} alt="" />

                                                <div className="bookInfo">
                                                    <p>{items.volumeInfo.title}</p>
                                                    <p>{items.volumeInfo.authors}</p>
                                                    <button type="submit" onClick={boundItemClick} >Save</button>
                                                </div>
                                                <br /><br />
                                            </li>

                                        </div>

                                    )
                                })
                            }

                        </ul>
                    ) : <strong>Happy Reading!!!!</strong>}

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
export default AddBookForm;

