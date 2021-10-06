const express = require("express")
var cors = require('cors');
const bodyParser = require("body-parser")
const fs = require('fs');
// create our express app
const app = express()
// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// route
const routes = require('./routes/Routes')
app.use('/', routes)
//start server
app.listen(3000, ()=>{
    console.log("listeniing at port:3000")
})