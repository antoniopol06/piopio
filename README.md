# piopio
Tweets real time with geolocation

Add folder config with tweetConf.js (Twitter developer keys)
module.exports = {
  consumer_key:         'consumer_key',
  consumer_secret:      'consumer_secret',
  access_token:         'access_token',
  access_token_secret:  'access_token_secret',
}

Change the file publi/js/app.js lines 40 and 41 with your id and acessToken´s Mapbox
id: '******',
accessToken: '******'

Run:

node bin/www
