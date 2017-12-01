const router = require("express").Router();
const userController = require("../../controllers/userController");
const  bookController = require("../../controllers/bookController");


module.exports = app => {

    // Post route for creating a new User
    app.post("/api/user/create", (req, res) => {
       
        userController.create(req,res)

    });


    // Get request for a User info
    app.get("/api/user/:userId", (req, res) => {
        
        userController.findById(req, res)
                     
    });

    // Get request for all User's Books ------CONFIRM
    app.get("/api/user/:userId/book", (req,res) => {

        userController.findAll(req,res)

    })
    
    // POST a new Book
    app.post("/api/book/create", (req,res) => {

        bookController.create(req,res)

    });

    // GET request for a Book Info
    app.get("/api/book/:bookId", (req,res) => {

        bookController.findById(req,res)

    });
}