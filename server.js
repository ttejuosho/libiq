const express = require("express");

//find local path
const path = require("path");
const db = require("./models");

//middleware
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const expressSession  = require('express-session');

//integrate mongo database using ORM
const mongoose = require("mongoose");

//server port number
const PORT = process.env.PORT || 3001;

//use express methods
const app = express();

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

//server routes
const routes = require("./routes");
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/libiq",
  {
    useMongoClient: true
  }
).then(() => console.log("connection successful"))
 .catch((err)=>console.error(err));


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
