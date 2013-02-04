var Tweet = require('../models/tweet')

// list all tweets
exports.list = function(req, res){
	console.log("\n\n\n" + "THE SESSION USER IS: " + req.session.user.name + "\n\n\n");

	var tweets = Tweet.find({}).exec(function (err, docs){
		if (err)
			return console.log("FAIL WHALE. Couldn't retrieve your tweets.");
		res.render('tweets', {tweets: docs, title: 'Twitter'});
	});
};

// post a newly-composed tweet
exports.post_tweet = function(req, res){
	// post action for the newly created tweet
	// save the new tweet
	console.log("\n\n\n" + "THE SESSION USER IS: " + req.session.user.name + "\n\n\n");
	var newTweet = new Tweet({username: req.session.user.name, text_body: req.body.tweet_body});
	newTweet.save(function (err){
	if(err)
		console.log("Unable to post tweet.");
	})
	res.redirect('/tweets');
};

