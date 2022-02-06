//Import express library//
const express = require('express');
const cors = require('cors');
//Importing routes//
const planetsRouter = require('./routes/planets/planets.router')

////////////////////






//Initialise express//
const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
})); //set up cors to allow cross origin access
app.use(express.json()); //Parse any incoming JSON from the body of incoming requests (this is signalled in the request header where the Content-Type = application:JSON) then goes through the routes below it//
app.use(planetsRouter); //handles planets routes

//export express app - to be used in server.js alongside HTTP server//
module.exports = app;
