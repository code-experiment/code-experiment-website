const express = require('express')
const sendToMeRouter = express.Router()
const nodemailer = require('nodemailer')

let transport = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: process.env.THE_EMAIL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: process.env.ACCESS_TOKEN,
    expires: 3599
  }
}

const transporter = nodemailer.createTransport(transport);
  transporter.verify((error, success) => {
    if(error) {
      //if error happened code ends here
      console.error(error)
    } else {
      //this means success
      console.log('users ready to mail myself', success)
    }
  });
 ;

 sendToMeRouter.post('/', (req, res) => {
  //make mailable object
  const mail = {
    from: process.env.THE_EMAIL,
    to: process.env.THE_EMAIL,
    subject: req.body.subject,
    text: `
      from: ${req.body.name} 
      contact: ${req.body.email}
      message: ${req.body.text}
    `
  }

  transporter.sendMail(mail, (err, data) => {
    if(err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
        status: 'success',
        data
      })
    }
  })
});

module.exports = sendToMeRouter