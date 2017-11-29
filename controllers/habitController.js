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

//   Contact.findByIdAndUpdate(
//     info._id,
//     {$push: {"messages": {title: title, msg: msg}}},
//     {safe: true, upsert: true},
//     function(err, model) {
//         console.log(err);
//     }
// );

  create: function(req,res){
    db.User.findByIdAndUpdate(
     _id:req.params.id,
     {$push:db.Habit.create(req.body)}
     )
  },
  // create: function(req, res) {
  //   db.User
  //     .findByIdAndUpdate({_id:req.params.id})
  //     .then({
  //       db.Habit.create(req.body)
  //         .then(function(results){
  //           return res.json(results)
  //         })
  //     })
  //     .then(function(results){
  //       $push:results
  //     })
  // },
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