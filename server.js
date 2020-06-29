var fs = require('fs');
	path = require('path');
	Twit = require('twit');
	config = require(path.join(__dirname, 'config.js'));

var T = new Twit(config);

T.post('statuses/update', { status: 'Tweeter Bot Testing 5:43PM 06/28/2020' }, function(err, data, response) {
	console.log(data)
});
