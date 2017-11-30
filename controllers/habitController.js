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
    db.Habit
    .create(req.body)
    .then(dbHabitModel => {
      console.log(dbHabitModel);
      db.User.findById(dbHabitModel.userId)
      .then(user => {
        console.log(user)
        user.habitId.push(dbHabitModel._id)
        user.save()
        res.json(user)

      })
    })
    .catch(err=> res.status(422).json(err));
  },

  //find a habit by id
  findById: (req, res) =>{
    const id = req.params.id;
    db.Habit.findById(id)
    .then(dbHabit => res.json(dbHabit))
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