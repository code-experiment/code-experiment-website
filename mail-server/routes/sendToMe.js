const express = require("express");
const sendToMeRouter = express.Router();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;
// const config = require("../config.js");
const process = require("process"); // though available globally, nodejs.org recommends importing process for each use

const SCOPE = "https://mail.google.com/";
const { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, THE_EMAIL } = process.env;
// const { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, THE_EMAIL } = config;
const oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, SCOPE);

oauth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN,
});

const accessToken = oauth2Client
    .getAccessToken()
    .catch((err) => console.log(err));

let transport = {
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: THE_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
    },
};

const transporter = nodemailer.createTransport(transport);
sendToMeRouter.post("/", (req, res) => {
    //make mailable object
    const mail = {
        // from: `${req.body.name} <${req.body.email}>`,
        from: THE_EMAIL,
        to: THE_EMAIL,
        subject: req.body.subject,
        text: `${req.body.text}\r\nSent from CodeExperiment Contact Form`,
    };

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: `${err}`,
            });
        } else {
            res.json({
                status: "success",
                data,
            });
        }
        transporter.close();
    });
});

module.exports = sendToMeRouter;
