const express = require("express");

//find local path
const path = require("path");
const db = require("./models");

//integrate mongo database using ORM
const mongoose = require("mongoose");

//middleware
const bodyParser = require("body-parser");
const expressSession  = require('express-session');

//passport authentication
const passport = require('passport');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');



//server port number
const PORT = process.env.PORT || 3001;

//use express methods
const app = express();

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

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

app.use(morgan('dev')); //log every request to the console
app.use(cookieParser());

app.use(session({secret:'ilovescotchscotchyscotchscotch'}))
app.use(passport.initialize());
app.use(passport.session());




// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
