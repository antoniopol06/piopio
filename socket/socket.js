var Twit = require('twit');
var TwitConf = require('../config/tweetConf');
module.exports = function(io) {

  io.on('connection', inicio);
  function inicio(socket){
    var T = new Twit({
        consumer_key:         TwitConf.consumer_key
      , consumer_secret:      TwitConf.consumer_secret
      , access_token:         TwitConf.access_token
      , access_token_secret:  TwitConf.access_token_secret
    })

    var stream = T.stream('statuses/sample')

    stream.on('tweet', function (tweet) {
      io.emit("newtweet", tweet);
    });

  };
        
}
