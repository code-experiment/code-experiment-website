const express = require('express')
const sendToMeRouter = express.Router()
const nodemailer = require('nodemailer')

console.log('from sendToMe')
sendToMeRouter.get('/', (req, res) => {
  res.send('hi')
})

module.exports = sendToMeRouter