const express = require('express')
const router = express.Router()
const twitter = require('../utils/twitter')
const personality = require('../utils/personality')
const data = require('../utils/data.json')

/* GET users listing. */

router
  .post('/', async (req, res, next) => {
    const { username, country } = req.body

    try {
      const tweets = await twitter.getTweets(username)
      const profile = await personality.getProfile(tweets)
      const result = personality.calculateProfession(profile.personality)
      const professions = data.professions[result]

      // res.json({ professions, tweets, country, profile }).send()

      res.render('response', {
        title: 'Talentos ocultos',
        professions,
        country
      })
    } catch (error) {
      console.info(error)
      next(error)
    }
  })

module.exports = router
