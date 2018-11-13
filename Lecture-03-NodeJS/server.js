const express = require('express');
const app = express();

const path = require('path');
const axios = require('axios');

app.use(express.static("view"));

app.get('/:class', (req, res) => {
    const subLink = req.params.class;
    axios({
        url: 'https://btvn-web16s.herokuapp.com/' + subLink,
        method: 'GET'
    }).then((data) => {
        res.send(data.data);
    })
})

// Hàm trên tương đương với tổng các hàm sau gộp lại:
// app.get('/web16', (req, res) => {
//     axios({
//         url: 'https://btvn-web16s.herokuapp.com/web16',
//         method: 'GET'
//     })
//     .then(function(data) {
//         res.send(data.data);
//     })
// })

// app.get('/web15', (req, res) => {
//     axios({
//         url: 'https://btvn-web16s.herokuapp.com/web15',
//         method: 'GET'
//     })
//     .then(function(data) {
//         res.send(data.data);
//     })
// })

//...etc...

app.listen(1412, (err) => {
    if (err) console.log(err);
    else console.log("Server started!!!");
})