const mongoose = require('mongoose');
const db = require('../../models');
const users = require("../../controllers/authController");
const router = require("express").Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const session = require('express-session');
 
 
module.exports = function (app) {
 
    //initialize passport
    passport.use(db.User.createStrategy());
    // use static serialize and deserialize of model for passport session support
    passport.serializeUser(db.User.serializeUser());
    passport.deserializeUser(db.User.deserializeUser());
 
    //need this according to passport guide
    app.use(cookieParser());
    app.use(session({
        secret: 'the princess and the frog',
        saveUninitialized: true,
        resave: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
 
    //routes
    ///api/auth/
    app.route('/register').post(users.register);
    app.route('/login').post(users.login);
    app.route('/login').get(users.getlogin);
   
   
};