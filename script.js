// TODO: Select all the DOM elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element

const form = document.getElementById("form");
const name = document.getElementById("name")
const password = document.getElementById("email");
const message = document.getElementById("msg-area")
const p = document.getElementById("error");
const button = document.querySelector("button");


//email regular expression
//const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regExp = (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)

//email validation function
function validateEmail(email) {
  if (regExp.test(email)) {
      p.textContent = '';
      form.submit();
  } else {
      p.textContent = 'Please enter a valid email address.';
  };
}

button.addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  validateEmail(email);
});

document.addEventListener('DOMContentLoaded', function (){
  const contactform = document.getElementById('form')
  contactform.addEventListener('submit', function (event){
    event.preventDefault();
    const formData = newFormData(contactform)

  })
})
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('contact');
});

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
    host: 'mail.YOURDOMAIN.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'YOUREMAIL', // generated ethereal user
        pass: 'YOURPASSWORD'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Nodemailer Contact" <your@email.com>', // sender address
      to: 'RECEIVEREMAILS', // list of receivers
      subject: 'Node Contact Request', // Subject line
      text: 'Hello world?', // plain text body
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
  });

app.listen(3000, () => console.log('Server started...'));

fetch('/send-email', {
          method: 'POST',
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              alert('Email sent successfully!');
          } else {
              alert('Failed to send email. Please try again.');
          }
      })
      .catch(error => {
          console.error(error);
          alert('An error occurred. Please try again.');
      });

