const router = require("express").Router();

module.exports = app => {
    app.get("/test", (req, res) => res.json("Route Tested"));

    // Post route for making a new User
    app.post("/test", (req, res) => {
        res.json(req.body);
    });


    // Post Route for creating a new user
    app.post("/api/user/new", (req, res) => {
        console.log(req.body);
        db.User.create(req.body.then(newUser => res.json(newUser)))
    });

    // Get request for a User info
    app.get("/api/user/:id", (req, res) => {
        db.User
        .find({ _id: req.params.id })
        .populate("books")
        .then(foundUser => res.json(foundUser));
    });
    
}