const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//ENV VARIABLES 
const port = 8080;


mongoose.connect('mongodb://localhost/puppack');

mongoose.connection.on('connected', function(){
    console.log('Mongoose is connected to localhost' )
});

mongoose.connection.on('error', function(err){
    console.log('Mongoose error: ' + err)
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(port, function(){
    console.log('App running on ' + port)
});

module.exports = app;