const express = require('express');
const searchCollegeRouter = express.Router();
const mongoose = require('mongoose');
var Colleges = require('../models/college')
const cors = require('./cors')
const bodyParser = require('body-parser');


searchCollegeRouter.use(bodyParser.json());

searchCollegeRouter.route('/name')
    .options(cors.corsWithOptions,(req, res)=> {res.sendStatus = 200})
    .get(cors.cors, (req, res, next)=>{
        Colleges.find({'College Name': req.body.name})
            .then((college)=>{
                res.status(200)
                res.setHeader('Content-Type', 'application/json')
                res.json(college)
            })
    })


module.exports = searchCollegeRouter;