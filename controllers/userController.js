//require the database models

const db = require("../models");

module.exports = {
	//find all users
	findAll: (req, res) => {
		db.User.find(req.query)
		.then(function(dbUser){
			res.json(dbUser);
		})
		.catch(function(err){
			res.json(err);
		})

	},
	//find a user by id
	findById: (req, res) =>{
		const id = req.params.id;
		db.User.findById(id)
		.then(dbUser => res.json(dbUser))
		.catch(err => res.status(422).json(err));
	},

	//create user
	create: function(req, res){
		db.User
      	.create(req.body)
      	.then(dbUser => res.json(dbUser))
      	.catch(err => res.status(422).json(err));
	},

	update:(req, res) =>{
		db.User
		.findOneAndUpdate({ _id: req.params.id }, req.body)
		.then(dbUser => res.json(dbUser))
		.catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  userHabit:function (req, res){
  	const id = req.params.id;
		db.User.findById(id)
		.populate("habitId")
		.then(dbUser => res.json(dbUser))
		.catch(err => res.status(422).json(err));

  }


}



