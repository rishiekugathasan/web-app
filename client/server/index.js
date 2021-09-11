const express = require('express');
const app = express();
const mc = require('mongodb').MongoClient;
const aboutUs = require('./routes/aboutUs');
const index = require('./routes/index');
const coaches = require('./coaches.json');
const questions = require('./questions.json');
const { google } = require("googleapis");
const nodemailer = require('nodemailer');
const pino = require('express-pino-logger')();
const fs = require('fs');
require('dotenv').config();

const session = require('express-session');
app.use(session({secret: 'EgiNAjvvFVcbgAz'}));

let db;

app.use('/aboutUs',aboutUs);
app.use('/',index);
app.use(pino);

//Body parsers
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/whoweare',function(req,res) {
    res.sendFile('./dummyPages/whoWeAre.html',{root:__dirname});
});

app.post('/question/:quesNum',(req,res) => {
    //updateDoc(req.body);
    let questionNumber = parseInt(req.params.quesNum);

    console.log(req.body);

    if (questionNumber == 4) {
        req.session.feet = req.body.feet;
        req.session.cms = req.body.cms;
        req.session.feet_inches = req.body.feet_inches;
    }else if (questionNumber == 5) {
        req.session.kgs = req.body.kgs;
        req.session.pounds = req.body.pounds;
    }else if (questionNumber == 6) {
        req.session.ideal_kgs = req.body.ideal_kgs;
        req.session.ideal_pounds = req.body.ideal_pounds;
    }else if (questionNumber == 7) {
        req.session["What's your goal?"] = req.body["What's your goal?"];
    }
    else if (questionNumber == 8) {
        req.session['Making time for exercise + workout is...'] = req.body['Making time for exercise + workout is...'];
    }
    else if (questionNumber == 9) {
        req.session['What is your activity level?'] = req.body['What is your activity level?'];
    }
    else if (questionNumber == 10) {
        req.session['What best describes your diet?'] = req.body['What best describes your diet?'];
    }
    else {
        req.session[String(Object.keys(req.body)[0])] = String(req.body[Object.keys(req.body)[0]]);
    }
    
    if (questionNumber == 14) {
        if (checkEmail(req.body.email) == 0) {
            return res.status(400).send({
                message: "Email was not entered properly! The email service providers we support include gmail, hotmail, aol, outlook, yahoo, icloud, me, mac."
            });
        }

        console.log(req.session);

        sendEmail(req.body.email);
        delete req.session.cookie;
        delete req.session.undefined;
        updateDoc(req.session);
        req.session.destroy();

        res.redirect('/');
        return;
    }

    if (checkSkip(questionNumber,req.session) != 1) {
        return res.status(400).send({
            message: "You did not enter values for these questions or entered both values!"
        });
    }

    questionNumber += 1;
    
    let newPath = "/#/quiz/question_" + String(questionNumber);
    //updateDoc(req.body.answer);
    res.redirect(newPath);
});

app.get('/sendQuestions', (req, res) => {
    let newQuestions = {};
    let someQuestions = [];
    for (let i = 0; i < questions.length; ++i) {
        newQuestions[i] = questions[i];
        someQuestions.push(questions[i]);
    }
    //res.json(newQuestions);
    res.send(someQuestions);
});

app.post('/sendEmail', (req, res) => {
    // console.log("SEND EMAIL REACHED");

    console.log(req.body);
    
    let name  = req.body.name;
    let email = req.body.email;
    let text  = req.body.inquiry;

    ShadySendMail(name, email, text, res);

    // res.redirect("/");
    // console.log("apperantly redirected");
});

/*
mc.connect("mongodb://localhost:27017",function(err,client) {
    if (err) {
        console.log("Error connecting to database.");
        //console.log(err);
        return;
    }

    db = client.db("testdb");

    db.collection("test").insertOne({key1:1, key2:2}, function(err,result) {
        if (err) throw err;
        console.log(result);
    });
 
    app.listen(5000);
    console.log('Server is listening at http://localhost:5000');
});
*/

app.listen(3001);
console.log('Server is listening at http://localhost:3001');

function checkEmail(email) {
    //can add aol, outlook and other services
    let gmail = email.includes("@gmail.com");
    let hotmail = email.includes("@hotmail.com");
    let aol = email.includes("@aol.com");
    let outlook = email.includes("@outlook.com");
    let yahoo = email.includes("@yahoo.com");
    let icloud = email.includes("@icloud.com"); 
    let me = email.includes("@me.com");
    let mac = email.includes("@mac.com");
    
    if (gmail || hotmail || aol || outlook || yahoo || icloud || me || mac) {
        return 1;
    }

    return 0;
}

function sendEmail(email) {
    /*
    User: fitnessautomail@gmail.com
    Pass: verycooljames 
    */

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'fitnessautomail@gmail.com',
            pass: 'verycooljames'
        }
    });
    
    var mailOptions = {
        from: 'fitnessautomail@gmail.com',
        to: String(email),
        subject: 'Thank you!',
        text: 'We appreciate that you took the time to complete our questionnaire. Please take a look at our poster attached below for more information about our training program. If you have any questions please contact James at 416-765-4905 or visit us today at 123 Anyone St. Markham, ON.',
        attachments: [{
            filename: 'poster.jpg',
            content: fs.createReadStream('./poster.jpg')
        }]
    };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        }else {
            console.log('Email sent: ' + info.response);
        }
    });
}

async function ShadySendMail(name, email, text, res){
    // console.log("SENDING EMAIL: ");

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.FROM,
            pass: process.env.PASS
        }
    });

    var mailOptions = {
        from: process.env.FROM,
        to: email,
        subject: name + " (" + email + ")'s inquiery",
        text
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.status(200).send();
}

async function updateDoc(ans) {
    //   console.log(ans);

      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
      });
    
      // Create client instance for auth
      const client = await auth.getClient();
    
      // Instance of Google Sheets API
      const googleSheets = google.sheets({ version: "v4", auth: client });
      const spreadsheetId = "1KLhPxPibw0hN5fKMZxdyEqzf5UsPXV0N7pChMzPIuVg";
    
      let d = new Date();
      let months = ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
      let date = months[d.getMonth()]+ " " + d.getFullYear();
    
      if ((await googleSheets.spreadsheets.get({spreadsheetId: spreadsheetId})).data.sheets
        .filter(sheet => sheet.properties.title === date).length === 0) 
        {
            await googleSheets.spreadsheets.batchUpdate ({ 
            spreadsheetId: spreadsheetId, 
            resource: {requests: [ {addSheet: {properties: {title: date }}}]}});
        }
    
      // Write row(s) to spreadsheet
      await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: date,
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [Object.values(ans)],
        },
      });
}

function checkSkip(questionNumber, values) {
    if (questionNumber == 2 && values.current_age == '') {
        return 0;
    }
    if (questionNumber == 3 && values["What's your biological sex?"] == '') {
        return 0;
    }
    if (questionNumber == 4) {
        if (values.feet != '' && values.feet_inches != '' && values.cms == '') {
            return 1;
        }
        if (values.cms != '' && (values.feet == '' && values.feet_inches == '')) {
            return 1;
        }
        return 0;
    }
    if (questionNumber == 5) {
        if (values.kgs == '' && values.pounds == '') {
            return 0;
        }
        if (values.kgs != '' && values.pounds != '') {
            return 0;
        }
    }
    if (questionNumber == 6) {
        if (values.ideal_kgs == '' && values.ideal_pounds == '') {
            return 0;
        }
        if (values.ideal_kgs != '' && values.ideal_pounds != '') {
            return 0;
        }
    }
    if (questionNumber == 7 && values["What's your goal?"] == undefined) {
        return 0;
    }
    if (questionNumber == 8 && values['Making time for exercise + workout is...'] == undefined) {
        return 0;
    }
    if (questionNumber == 9 && values['What is your activity level?'] == undefined) {
        return 0;
    }
    if (questionNumber == 10 && values['What best describes your diet?'] == undefined) {
        return 0;
    }
    if (questionNumber == 12 && values.squat == '') {
        return 0;
    }

    return 1;
}