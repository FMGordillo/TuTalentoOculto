const express = require('express')
const data = require('../utils/data.json')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  const { countries } = data
  const _countries = Object.keys(countries).map(country => {
    const code = countries[country]
    return [country, code]
  })
  res.render('index', { title: 'Welcome!', _countries })
})

module.exports = router
