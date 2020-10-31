const express = require('express');
const mongoose = require('mongoose');
var Colleges = require('../models/college')
const bodyParser = require('body-parser');

const searchCollegeRouter = express.Router();

searchCollegeRouter.use(bodyParser.json());

searchCollegeRouter.route('/name')
    .get((req, res, next)=>{
        console.log(req.body.Search)
        Colleges.find({'College Name': req.body.Search})
            .then((college)=>{
                res.status(200)
                res.setHeader('Content-Type', 'application/json')
                res.json(college)
            })
    })


module.exports = searchCollegeRouter;