const express = require('express')
const router = express.Router()
const twitter = require('../utils/twitter')
const personality = require('../utils/personality')
const data = require('../utils/data.json')

/* GET users listing. */

router
  .get('/', (req, res, next) => {
    res.send('respond with a resource')
  })
  .post('/', async (req, res, next) => {
    const { username, country } = req.body

    try {
      const tweets = await twitter.getTweets(username)
      const profile = await personality.getProfile(tweets)
      res.json(profile)
      const result = personality.calculateProfession(profile)
      const professions = data.professions[result]

      // res.json({ professions, tweets, country, profile }).send()

      // res.render('response', {
      //   title: 'Talentos ocultos',
      //   professions,
      //   country
      // })
    } catch (error) {
      console.error(error)
      res.send('error lolol, see the logs men!', { error })
    }
  })

module.exports = router
