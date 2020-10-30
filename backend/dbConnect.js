const mongoose = require('mongoose')

const uri = "mongodb+srv://dbAdmin:dbAdmin@890@cluster0.90our.mongodb.net/coldb?retryWrites=true&w=majority";
var dbconnect = (()=>{
    mongoose.connect(uri,  {useNewUrlParser: true, useUnifiedTopology:true}, (err, db)=>{
        if(err==null){
            console.log('Connected to Database')
        }
    })
});

module.exports = dbconnect;