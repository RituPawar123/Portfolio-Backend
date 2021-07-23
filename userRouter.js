const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const fs = require('fs');
const userRouter = express.Router();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "contact.portfoliobuilder@gmail.com",
    pass: "Portfolio@123",
  },
});

userRouter.use(bodyParser.json());

userRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    next();
  })
  .get(async (req, res, next) => {
    res.json({});
  })
  .put((req, res, next) => {
    res.json({});
  })
  .post(async (req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    const data = req.body;    
    console.log(data)
    const infoMsg = `${data.name}|${data.email}|${data.description}\n`
    try {
      fs.appendFileSync("contact_data.txt", infoMsg);
      const mailOptions = {
        from: "contact.portfoliobuilder@gmail.com",
        to: data.email,
        subject: "Thanks for connecting us!!😍",
        html: `<div>
      </div> Hello ${data.name} Thanks for your response we will contact you soon!!`,
      };
      // transporter.sendMail(mailOptions, function (error, info) {
      //   if (error) {
      //     console.log(error);
      //   } else {
      //     console.log("Email sent: " + info.response);
      //   }
      // });
      res.status(200).send({
        message: "Data sent successfully",
      });
    } catch (err) {
      res.json({ error: err.message });
    }
  })
  .delete((req, res, next) => {
    res.json({});
  });

module.exports = userRouter;
