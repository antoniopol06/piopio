var socket = io.connect('');

var globalTweets = (function() {
  var total = 0;
  var hashtags = 0;
  
  function modify(val, variable) {
    switch(variable){
      case "total":
        total = total + val;
        break;
      case "hashtags":
        hashtags = hashtags + val;
        break;
      default:
        break;
    }
    total += val;
  }

  return {
    increment: function(num, variable) {
      modify(num, variable);
    },
    getTotal: function() {
        return total;
    },
    getHashtags: function() {
        return hashtags;
    },
  }
})();

var map = L.map('map').setView([31.653381,-39.754028], 3);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: '******',
  accessToken: '******'
}).addTo(map);

console.log(socket);
socket.on('connect', function socketConnected() {
  console.log('user connected websockets');
  socket.on('newtweet', function tweetReceived(tweet){
    console.log('newTweet');
    var img = tweet.user.profile_image_url;
    var text = tweet.text;
    if(tweet.geo){
      var lat = tweet.geo.coordinates[0];
      var lon = tweet.geo.coordinates[1];
      var avatar = L.icon({
          iconUrl: img,
          iconSize:     [20, 20], // size of the icon
          iconAnchor:   [22, 22], // point of the icon which will correspond to marker's location
          popupAnchor:  [-11, -11] // point from which the popup should open relative to the iconAnchor
      });
      var marker = L.marker([lat, lon],{icon: avatar}).addTo(map);
      marker.bindPopup(text).openPopup();
    }
    globalTweets.increment(1, "total");
    globalTweets.increment(tweet.entities.hashtags.length, "hashtags");
    tweets = document.getElementById("counttweets");
    hashtags = document.getElementById("counthashtags");
    tweets.innerHTML = globalTweets.getTotal();
    hashtags.innerHTML = globalTweets.getHashtags();

  });

});

