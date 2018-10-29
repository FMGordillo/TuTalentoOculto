/* eslint-disable */
require('dotenv').config()
const Twitter = require('twitter')
const {
  CONSUMER_KEY,
  CONSUMER_SECRET,
  ACCESS_TOKEN,
  ACCESS_TOKEN_SECRET
} = process.env
const client = new Twitter({
  consumer_key: CONSUMER_KEY,
  consumer_secret: CONSUMER_SECRET,
  access_token_key: ACCESS_TOKEN,
  access_token_secret: ACCESS_TOKEN_SECRET
})

/**
 * Get most recent tweets from user
 * @param {String} screen_name
 *
 */
const getTweets = screen_name =>
  client
    .get('statuses/user_timeline', {
      screen_name,
      count: 200,
      include_rts: false
    })
    .then(function onResult(result) {
      return result.map((tweet, id) => ({
        content: tweet.text.replace(/(\r\n\t|\n|\r\t|"|@)/gm, ''),
        id,
        language: 'es'
      }))
    })

module.exports = {
  getTweets
}
