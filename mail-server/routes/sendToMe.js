const express = require("express");
const sendToMeRouter = express.Router();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;

const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";
const { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, THE_EMAIL } = process.env;
const oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, OAUTH_PLAYGROUND);

oauth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});

const accessToken = oauth2Client
  .getAccessToken()
  .catch((err) => console.log(err));

let transport = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: THE_EMAIL,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
    accessToken: accessToken,
    expires: 3599,
  },
};

const transporter = nodemailer.createTransport(transport);
sendToMeRouter.post("/", (req, res) => {
  //make mailable object
  const mail = {
    from: THE_EMAIL,
    to: THE_EMAIL,
    subject: req.body.subject,
    text: `
      from: ${req.body.name} 
      contact: ${req.body.email}
      message: ${req.body.text}
    `,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
        data,
      });
    }
  });
});

module.exports = sendToMeRouter;
