import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import axios from 'axios';
import '../App.css';
import '../animate.css';
import API from '../utils/API';

window.moment = moment;
window.axios =axios;

class DueBooks extends React.Component{
    
       state={
        books:[]
       }
    

    componentDidMount() {

        let app = this
        console.log(app, "this is new")
        console.log("it mounted");
        API.getBooks("5a25955dfa65f650303d411b")
        .then(function(res){
            console.log(app, "this is this")
            app.setState({
              books:res
            })            
        })
        console.log(this.books)
      }
      
    render(){
        return(
          <div>
        {this.state.books.map((book, i) => (
          <div key={i}>
            <h3>{book.title}</h3>
            <p>Due {book.due}</p>
          </div>
        ))}
      </div>
        )
    }
}
export default DueBooks;

/*


class App extends Component {
  constructor() {
    super();

    this.state = {
      // data: [
      //   {
      //     title: 'First Book',
      //     due_date: moment().add(5, 'days')
      //   },
      //   {
      //     title: 'Second Book',
      //     due_date: moment().add(3, 'days')
      //   },
      //   {
      //     title: 'Third Book',
      //     due_date: moment().add(2, 'hours')
      //   }
      // ],
      books: []
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    let books = [];
    
    // API call right here
    axios.get('/books')
      .then(res => {
        res.data.forEach(book => {
          let result = {
            title: book.title,
            due: moment(book.date).from(moment())
          };

          books.push(result);
        });
        
        this.setState({books: books});
      });

  }

  render() {
    return (
      <div>
        {this.state.books.map((book, i) => (
          <div key={i}>
            <h3>{book.title}</h3>
            <p>Due {book.due}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;




*/