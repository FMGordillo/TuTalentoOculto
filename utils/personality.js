/* eslint-disable */
require('dotenv').config()
const matcher = require('./matched-traits')
const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3')
const { PI_USERNAME, PI_PASSWORD } = process.env

const personalityInsights = new PersonalityInsightsV3({
  username: PI_USERNAME,
  password: PI_PASSWORD,
  version: '2017-10-13'
})

const calculateProfession = big5 => {
  let abbrev = ''
  big5.forEach(element => {
    switch (element.name) {
      case 'Extraversion':
        abbrev += element.percentile > 0.5 ? 'E' : 'I'
        break
      case 'Openness':
        abbrev += element.percentile > 0.5 ? 'N' : 'S'
        break
      case 'Agreeableness':
        abbrev += element.percentile > 0.5 ? 'F' : 'T'
        break
      case 'Conscientiousness':
        abbrev += element.percentile > 0.5 ? 'J' : 'P'
        break
      default:
        break
    }
  })
  return abbrev
}

const getProfile = contentItems =>
  new Promise((resolve, reject) =>
    personalityInsights.profile(
      {
        content: {
          contentItems
        },
        content_type: 'application/json',
        consumption_preferences: true,
        raw_scores: true,
        content_language: 'es'
      },
      function onProfile(error, profile) {
        if (error) reject(error)
        // const data = matcher(profile)
        // resolve(data)
        resolve(profile)
      }
    )
  )

module.exports = {
  getProfile,
  calculateProfession
}
