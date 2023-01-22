var express = require('express');
var app = express()
const connectToMongo = require('./db');

// connection with DataBase
const db = require("./db");
connectToMongo();

//Available Routes
app.use("/api/auth",require("./routes/auth"))
app.use("/api/notes",require("./routes/notes"))




app.get('/', (req, res) => {
    res.send({ "id": 1, "name": "Ali Hasan" })
})
app.get('/api/list/:id', (req, res) => {
    // res.send(req.params.id)
    res.send(req.query)
})



app.listen(5000, () => console.debug("server runing...."))    