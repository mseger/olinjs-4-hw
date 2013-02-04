var Tweet = require('../models/tweet')

// list all tweets
exports.list = function(req, res){
	var tweets = Tweet.find({}).exec(function (err, docs){
		if (err)
			return console.log("FAIL WHALE. Couldn't retrieve your tweets.");
		res.render('tweets', {tweets: docs, title: 'Twitter'});
	});
};

// post a newly-composed tweet
exports.post_tweet = function(req, res){
	// post action for the newly created tweet
	console.log("MADE IT INTO THE POST TWEET DIALOG!!");
	// save the new tweet
	var newTweet = new Tweet({name: 'Put Current User Here', text_body: req.body.tweet_body});
	newTweet.save(function (err){
	if(err)
		console.log("Unable to post tweet.");
	})
	res.redirect('/tweets');
};

// delete an existing tweet

