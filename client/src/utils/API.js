import axios from "axios";


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
    findAllBooks: userId=>{
        return axios.get(`/api/user/${userId}`/books)
            .then(
                res =>{
                    return res.data.dueBooksId.title
                }
            )
    },

    // finds the user's favorite book
    favBooks: userId => {
        return axios.get(`/api/user/${userId}/books`)
            .then(res =>{
                favBooks = [];
                books = res.data.dueBooksId
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