var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CollegeSchema = new Schema({
    "College Name":{
        type: String,
        required: true,
    },
    "Genders Accepted":{
        type: String,
        required: true
    },
    "Campus Size":{
        type: Number,
        required: true
    },
    "Total Student Enrollments":{
        type: Number,
        required: true
    },
    "Total Faculty":{
        type: Number,
        required: true
    },
    "Established Year":{
        type: Number,
        required: true
    },
    Rating:{
        type: Number,
    },
    University:{
        type: String,
    },
    Courses:{
        type: String,
        required: true
    },
    Facilities:{
        type: String,
        required: true
    },
    City:{
        type: String,
        required: true
    },
    State:{
        type: String,
        required: true
    },
    Country:{
        type: String,
        required: true
    },
    "College Type":{
        type: String,
        required: true
    },
    "Average Fees":{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('college', CollegeSchema);
 