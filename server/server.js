const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const path = require('path');
const queries = require('../database/queries.js');
const PORT = 3030;

app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
})

app.listen(PORT, (req, res) => {
    console.log(`Server listening on port ${PORT}.`)
})