// Include the Axios library for HTTP requests
import axios from "axios";



// Google Books API Key
// var APIKey = "AIzaSyCZHjfzT21eqDqHKtFwh3CcFbRVJNJgUmQ"

// Helper Functions
const helpers = {

    runQuery: function(bookTitle){

    console.log("Query Run");
    // Run a query using Axios. Then return the results as an object with an array.
    // See the Axios documentation for details on how we structured this with the params.
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookTitle)
    .then(res => {return res} )
    .catch(err => {console.log(err)})
    
    }
}

// We export the helpers function
export default helpers;