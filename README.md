PIOPIO
============
Tweets real time with geolocation

Configuration
============
Add folder config with tweetConf.js (Twitter developer keys)

```js
module.exports = {
  consumer_key:         'consumer_key',
  consumer_secret:      'consumer_secret',
  access_token:         'access_token',
  access_token_secret:  'access_token_secret',
}
```
Change the file publi/js/app.js lines 40 and 41 with your id and acessToken´s Mapbox
```js
id: '******',
accessToken: '******'
```
Run:
============
```js
node bin/www
```
