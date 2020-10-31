var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = {
    "INST CODE": {
        type: String,
        required: true
    },
    "INSTITUTE NAME": {
        type: String,
        required: true
    },
    "PLACE": {
        type: String,
        required: true
    },
    "DIST": {
        type: String,
        required: true
    },
    "COED":{
        type: String,
        required: true,
    },
    "TYPE":{
        type: String,
        required: true 
    },
    "Year Of ESTB":{
        type: Number,
        required: true
    },
    "BRANCH": {
        type: String,
        required: true
    },
    "BRANCH NAME":{
        type: String,
        required: true
    },
    "OC BOYS": {
        type: Number,
        required: true
    },
    "Tution Fees":{
        type: Number,
        required: true,
    },
    "AFFILIATED":{
        type: String,
        required: true
    }
}

module.exports = mongoose.model('category', CategorySchema);