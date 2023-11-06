var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ngobesethembelihle34@gmail.com',
    pass: 'Izwile@30'
  }
});

var mailOptions = {
  from: 'ngobesethembelihle34@gmail.com',
  to: 'thembelihlengobese3@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!New Email'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

/*
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const { Script } = require('vm');

const app = express();

app.use(express.static.path.join())
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('contact');
});

app.post('/send', (req, res) => {
    console.log(req.body)
})

app.post('/send', (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Company: ${req.body.company}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'ngobesethembelihle34.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'c', // generated ethereal user
        pass: 'Izwile@30'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Nodemailer Contact" <your@email.com>', // sender address
      to: 'thembelihlengobese3@gmail.com', // list of receivers
      subject: 'Node Contact Request', // Subject line
      text: 'Hello world.This was Easy!', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('contact', {msg:'Email has been sent'});
  });
 // });

app.listen(3000, () => console.log('Server started...'));*/