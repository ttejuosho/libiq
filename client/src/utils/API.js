import axios from "axios";


export default {
    // Creates newUSer Object
    create: dbUser => {
        console.log("wew are eehrefie")
        return axios.post(`/api/user/create`, dbUser);
    },

    // Gets user info object
    findById: dbUser => {
        // return axios.get(`/api/user/${userId}`);
    },

    // Creates New Book Object
    createBook: dbBook => {
        return axios.post(`/api/book/create`, dbBook);
    },

    // Finds All books Added by a User
    findAll: dbBook => {
        // return axios.get(`/api/user/${userId}/book`);
    }
};