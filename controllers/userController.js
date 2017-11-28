//require the database models

const db = require("../models");

module.exports = {

	//find all users
	findAll: (req, res) => {
		db.User.find({})
		.then(function(dbUser){
			res.json(dbUser);
		})
		.catch(function(err){
			res.json(err);
		})

	}

	//find a user by id
	findById: (req, res) =>{
		const id = req.params.id;
		db.User.findById(id)
		.then(dbUser => res.json(dbUser))
		.catch(err => res.status(422).json(err));
	}

	//create user
	create: (req, res) =>{
		db.User
      	.create(req.body)
      	.then(dbUser => res.json(dbUser))
      	.catch(err => res.status(422).json(err));

	}

	update:(req, res) =>{
		db.User
		.findOneAndUpdate({ _id: req.params.id }, req.body)
		.then(dbUser => res.json(dbUser))
		.catch(err => res.status(422).json(err));


	}


}



