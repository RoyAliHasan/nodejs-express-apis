var express = require('express');
var app = express()
const connectToMongo = require('./db');
const dotenv=require('dotenv');
const cors =require('cors')
dotenv.config();

// Middle ware
app.use(express.json())
// cors blocking
app.use(cors())
// connection with DataBase
const db = require("./db");
connectToMongo();

//Available Routes
app.use("/api",require("./routes/auth"))
app.use("/api/notes",require("./routes/notes"))

app.get('/', (req, res) => {
    res.send("Welcome ..... ")
})

app.listen(process.env.PORT, () => console.debug("server running on Port...."+ process.env.PORT))    