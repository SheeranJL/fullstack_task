const express = require('express');

//Importing function controllers//
const {getAllPlanets} = require('./planets.controller');



const planetsRouter = express.Router();

planetsRouter.get('/planets', getAllPlanets);

module.exports = planetsRouter;
