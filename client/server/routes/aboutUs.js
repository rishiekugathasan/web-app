const express = require('express');
let router = express.Router();

router.get('/',function(req,res) {
    res.sendFile('/dummyPages/aboutUs.html',{root:'../server'});
    //res.send("hi get /aboutUs.");
});

router.get('/meetTheTeam',function(req,res) {
    res.sendFile('/dummyPages/meetTheTeam.html',{root:'../server'});
    //res.send("hi get /aboutUs/meetTheTeam.");
});
/*
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'getrekt.soccer@gmail.com',
        pass: '20RishiE01'
    }
});

var mailOptions = {
    from: 'getrekt.soccer@gmail.com',
    to: 'rishie2001@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};
  
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    }else {
        console.log('Email sent: ' + info.response);
    }
});
*/

module.exports = router;