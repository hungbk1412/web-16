const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

const questions = JSON.parse(fs.readFileSync('questions.json', 'utf-8'));

app.use(express.static("view"));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/randomquestion', (req, res) =>{
    res.send((questions[Math.floor(Math.random()*questions.length)]).content); 
})

app.get('/question/:questionid', (req, res) => {
    const { questionid } = req.params;
    res.send(questions[questionid].content);
})

app.get('/ask', (req, res) => {
    res.sendFile(__dirname + "/view/ask.html");
});

app.post('/ask',  (req, res) => {    
    console.log(questions[1], questions.length);
    let newQuestion = {
        id: questions.length,
        yes: 0,
        no: 0,
        content: req.body.question
    }
    questions.push(newQuestion);
    fs.writeFileSync('questions.json', JSON.stringify(questions));
    res.redirect("/");
})

app.get("/", (req, res) => {
    res.send("Hello")
})

app. listen(6969, (err) => {
    if (err) console.log(err);
    else console.log("Server started!!!");
});