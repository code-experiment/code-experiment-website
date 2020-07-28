require('dotenv').config()
const cors = require('cors');
const express = require('express')
const app = express()
const morgan = require('morgan')
const nodemailer = require('nodemailer')
const port = process.env.PORT || 4444

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/sendtome', require('./routes/sendToMe'))

app.listen(port, () => {
  console.log(`app is live on ${port}`)
})

