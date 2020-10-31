var express = require('express');
const mongoose = require('mongoose');
var categs = require('../models/category');
const bodyParser = require('body-parser');
var List = require("collections/list");

var eligibleRouter = express.Router();

eligibleRouter.use(bodyParser.json());

eligibleRouter.route('/')
    .post((req, res, next)=>{
        var finalList = [];
        categs.find({'BRANCH': req.body.category}, (err, out)=>{
            var count=0
            res.status(200)
            res.setHeader('Content-Type', 'application/json');
            res.send(out.filter((categ)=> { return (categ["OC BOYS"]!= null && req.body.rank<categ["OC BOYS"])}))
        })
    })

module.exports = eligibleRouter;


