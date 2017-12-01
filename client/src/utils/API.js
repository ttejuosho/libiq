import axios from "axios";


export default {
    // Creates newUSer Object
    create: dbUser => {
        return axios.post(`/api/user/create`, dbUser);
    },

    // Gets user info object
    findById: dbUser => {
        // return axios.get(`/api/user/${userId}`);
    },

    // Creates New Book Object
    create: dbBook => {
        return axios.post(`/api/book/create`, dbBook);
    },

    // Finds All books Added by a User
    findAll: dbBook => {
        // return axios.get(`/api/user/${userId}/book`);
    }
};