var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'thembelihlengobese3@gmail.com',
    pass: 'Nombulelo@3146'
  }
});

var mailOptions = {
  from: 'thembelihlengobese3@gmail.com',
  to: 'ngobesethembelihle34@gmail.com',
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
