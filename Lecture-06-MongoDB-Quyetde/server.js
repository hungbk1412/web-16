const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require("mongoose");

const questionModel = require("./models/questionModel");

mongoose.connect("mongodb://localhost/quyetde", { useNewUrlParser: true }, (err) => {
    if(err) console.log("connect err: " + err)
    else console.log("DB Connect success!");
});

app.use(express.static("view"));

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/view/home.html");
})

app.post("/answer", (req, res) => {
    
})

app.get('/randomquestion', (req, res) =>{    
    questionModel.count( {}, (err, count) => {
        if(err) console.log(err)
        else { 
            const randomNum = Math.floor(Math.random()*count);
            questionModel.findOne({}, null, { skip: randomNum }, (err, questionFound) => {
                if(err) console.log(err)
                else res.json({question : questionFound });
            })
        }
    })
})

app.get('/question/:questionID', (req, res) => {
    questionModel.findById(req.params.questionID,(err, question) => {
        if (err) console.log(err)
        else res.json( {question: question })
    })
})

app.get('/ask', (req, res) => {
    res.sendFile(__dirname + "/view/ask.html");
});

app.post('/ask',  (req, res) => {
    questionModel.create({ content: req.body.question }, (err, quesionCreated) => {
        if (err) console.log("ask err: " + err)
        else  {
            console.log(quesionCreated);
            res.redirect("/");
        }
    })
})

app. listen(6969, (err) => {
    if (err) console.log(err);
    else console.log("Server started!!!");
});