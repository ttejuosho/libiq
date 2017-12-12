import React, { Component } from "react";
import '../App.css';
import LibiqLogo from '../images/LibiqLogo2.jpg';
import LibiqWordLogo from '../images/LibiqWordLogo.png';
import Footer from './Footer.js';
import API from "../utils/API"
import DueBooks from './DueBooks.js';

class Books extends Component {

    constructor() {
        super();
        this.state = {
            dueBooks: [],
            saving: false,
            gotBooks: true
        }
    } //end of constructor 


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

    } //end of click function

    makeBooks = (aBook) => {
        API.createBooks({ books: aBook })
            .then(console.log(aBook))
            .catch(err => console.log(err));
    };

    render() {
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
    }

}


export default Books;

