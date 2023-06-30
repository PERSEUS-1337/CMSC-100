const express = require('express');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const path = require("path");
const htmlPath = "/static/index.html";

express()
    .use(bodyParser.urlencoded({ extended: true }))
    .use(express.json())
    .use(express.static(path.join(__dirname)))
    // .use()
    .get('/', (req, res) => {
        console.log("> Default Page");
        res.sendFile(path.join(__dirname+htmlPath));
        console.log("> Success");
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));