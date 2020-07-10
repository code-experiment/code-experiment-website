const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const nodemailer = require('nodemailer')
const port = 4444

app.use(morgan('dev'))
app.use(express.json())
app.use('/sendtome', require('./routes/sendToMe'))

app.listen(port, () => {
  console.log(`app is live on ${port}`)
})

