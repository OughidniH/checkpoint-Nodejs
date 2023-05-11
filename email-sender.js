const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:"oughidnih@gmail.com",
        pass:"hlima1992a"
    }
}) 
const mailOptions = {
    from: 'oughidnih@gmail.com',
    to: 'oughidnih@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  console.log("conncted")
