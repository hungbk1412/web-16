const express = require('express');
let app = express();

const path = require('path');
const axios = require('axios');

app.use(express.static("view"));

app.get('/web16', (req, res) => {
    axios({
        url: 'https://btvn-web16s.herokuapp.com/web16',
        method: 'GET'
    })
    .then(function(data) {
        res.send(data.data);
    })
})

app.get('/web16', (req, res) => {
    axios({
        url: 'https://btvn-web16s.herokuapp.com/web16',
        method: 'GET'
    })
    .then(function(data) {
        res.send(data.data);
    })
})

app.get('/web15', (req, res) => {
    axios({
        url: 'https://btvn-web16s.herokuapp.com/web15',
        method: 'GET'
    })
    .then(function(data) {
        res.send(data.data);
    })
})

app.get('/web14', (req, res) => {
    axios({
        url: 'https://btvn-web16s.herokuapp.com/web14',
        method: 'GET'
    })
    .then(function(data) {
        res.send(data.data);
    })
})

app.get('/web13', (req, res) => {
    axios({
        url: 'https://btvn-web16s.herokuapp.com/web13',
        method: 'GET'
    })
    .then(function(data) {
        res.send(data.data);
    })
})

app.get('/web12', (req, res) => {
    axios({
        url: 'https://btvn-web16s.herokuapp.com/web12',
        method: 'GET'
    })
    .then(function(data) {
        res.send(data.data);
    })
})

app.get('/web11', (req, res) => {
    axios({
        url: 'https://btvn-web16s.herokuapp.com/web11',
        method: 'GET'
    })
    .then(function(data) {
        res.send(data.data);
    })
})

app.get('/web10', (req, res) => {
    axios({
        url: 'https://btvn-web16s.herokuapp.com/web10',
        method: 'GET'
    })
    .then(function(data) {
        res.send(data.data);
    })
})


app.listen(1412, (err) => {
    if (err) console.log(err);
    else console.log("Server started!!!");
})