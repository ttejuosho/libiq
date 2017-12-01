const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: 'ascending'})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.Book
      //create the book
      .create(req.body)
      .then(
        //when you recieve the book model
        dbBookModel =>{
          //find user by id associated with the book model
          db.User.findById(dbBookModel.userId)
          .then(user =>{
            //push the due books on to the book array
            user.dueBooksId.push(dbBookModel._id);
            //save changes
            user.save();
            res.json(user);
          })
          .catch(err => res.status(422).json(err));

        })
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  favorites: function(req,res){
    db.Book
      .find({isFavorite:true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },
  archives: function(req,res){
    db.Book
      .find({isReturned:true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },
  dueBooks: function(req,res){
    db.Book
      .find({isReturned:false})
      .then(dbModel =>res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

  
  
};
