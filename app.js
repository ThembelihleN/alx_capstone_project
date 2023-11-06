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
