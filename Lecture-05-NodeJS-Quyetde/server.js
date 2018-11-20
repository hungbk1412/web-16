const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(express.static("view"));

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/view/home.html");
})

app.get("/answer", (req, res))

app.post("/answer", (req, res) => {
    const questionID = req.body.questionID;
    const vote = req.body.vote;
    const questions = JSON.parse(fs.readFileSync('questions.json', 'utf-8'));
    if (vote == "yes") questions[questionID].yes += 1
    else questions[questionID].no += 1;
    fs.writeFileSync('./questions.json', JSON.stringify(questions));
    // res.redirect("/question/" + questionID);
    res.send({question: questions[questionID]})
    // Phải res. trả về cái gì đó thì mới nhận là thành công 1 request
})

app.get('/randomquestion', (req, res) =>{
    const questions = JSON.parse(fs.readFileSync('questions.json', 'utf-8'));    
    res.json({ question : questions[Math.floor(Math.random()*questions.length)]}); 
})

app.get('/question/:questionID', (req, res) => {
    const { questionID } = req.params;
    const questions = JSON.parse(fs.readFileSync('questions.json', 'utf-8'));
    res.json({question : questions[questionID]});
})

app.get('/ask', (req, res) => {
    res.sendFile(__dirname + "/view/ask.html");
});

app.post('/ask',  (req, res) => {
    const questions = JSON.parse(fs.readFileSync('questions.json', 'utf-8'));
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

app. listen(6969, (err) => {
    if (err) console.log(err);
    else console.log("Server started!!!");
});