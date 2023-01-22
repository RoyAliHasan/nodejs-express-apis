var express = require('express');
var app = express()
const connectToMongo = require('./db');
const dotenv=require('dotenv');
dotenv.config();

// Middle ware
app.use(express.json())

// connection with DataBase
const db = require("./db");
connectToMongo();

//Available Routes
app.use("/api/auth",require("./routes/auth"))
app.use("/api/notes",require("./routes/notes"))

app.get('/', (req, res) => {
    res.send("Welcome ..... ")
})

app.listen(process.env.PORT, () => console.debug("server runing on Port...."+ process.env.PORT))    