const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Habit
      .find()
      .sort({ date:'descending'})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req,res){
    console.log(db.User._id)
    db.User.findByIdAndUpdate({ _id: req.body.id },
     {$push:db.Habit.create(req.body)}
     )
  },
  //find a habit by id
  findById: (req, res) =>{
    const id = req.params.id;
    db.User.findById(id)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Habit
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Habit
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};