const express = require('express');
const searchCollegeRouter = express.Router();
const mongoose = require('mongoose');
var Colleges = require('../models/college')
const bodyParser = require('body-parser');


searchCollegeRouter.use(bodyParser.json());

searchCollegeRouter.route('/:colName')
    .get((req, res, next)=>{
        Colleges.find({'College Name': req.params.colName})
            .then((college)=>{
                res.status(200)
                res.setHeader('Content-Type', 'application/json')
                res.json(college)
            })
    })


module.exports = searchCollegeRouter;