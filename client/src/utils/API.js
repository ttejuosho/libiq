import axios from "axios";
import moment from 'moment';

window.moment = moment;

export default {
    // Creates new User Object
    createUser: dbUser => {
        return axios.post(`/api/user`, dbUser);
    },

    // Gets user info about the User
    findUserById: userId => {
        return axios.get(`/api/user/${userId}`);
    },

    // Creates New Book Object
    createBooks: dbBook => {
        return axios.post(`/api/books/`, dbBook);
    },

    //retrieves title for every book from that user
    findAllBooks: userId =>{
        return axios.get(`/api/user/${userId}/books`)
            .then(
                res =>{
                    let bookTitles =[];
                    let userBooks = res.data.dueBooksId;
                    for(var i; i<userBooks.length;i++){
                        bookTitles.push(userBooks.title)
                    }
                    return bookTitles
                }
            )
    },
    
    //calculate when the books are due 
    getBooks: (userId) => {        
        // API call right here
        axios.get(`/api/user/${userId}/books`)
          .then(res => {
            let books = [];
            res.data.forEach(book => {
              let result = {
                title: book.title,
                due: moment(book.date).from(moment())
              };
              books.push(result);
            });
            
          });
    
      },    
    // finds the user's favorite books
    favBooks: userId => {
        return axios.get(`/api/user/${userId}/books`)
            .then(res =>{
                let favBooks = [];
                let books = res.data.dueBooksId
                for(var i = 0 ; i< books.length;i++){
                    if(books.isFavorite === true){
                        favBooks.push(books.title)
                    }
                }
                return favBooks;
                
            } )
         }



    //creates a user habit

    //finds the habit of the user

};