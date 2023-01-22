var express = require('express');
const connectToMongo = require('./db');
var app = express()

// 
const db = require("./db");
connectToMongo();

app.get('/', (req, res) => {
    res.send({ "id": 1, "name": "Ali Hasan" })
})
app.get('/api/list/:id', (req, res) => {
    // res.send(req.params.id)
    res.send(req.query)
})



app.listen(3000, () => console.debug("server runing...."))    