var User = require('../models/user')
/*
 * GET users listing.
 */

exports.list = function(req, res){
  // get all existend users from db
  var users = User.find({}).exec(function (err, docs){
  	if (err)
  		return console.log("Couldn't get users.");
  	res.render('users', {users: docs, title: 'Twitter Users'});
  });
};

// create a new user, based on user input
exports.create = function(req, res){
	res.render('new_user', {title: 'Create a new profile'});
};

// post new user info
exports.create_post = function(req, res){
	// post action for the newly created user

	// save if this user doesn't currently exist
	if(!User.findOne({name: req.body.name})){
		// save the new User
		var newUser = new User({name: req.body.name});
		newUser.save(function (err){
		if(err)
			console.log("Unable to save user.");
		})
		res.redirect('/users');
	}else{
		// otherwise, user exists, log it (PUT A POP-UP IN HERE)
		console.log("Sorry, that username has been taken.");
	};
};