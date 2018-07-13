const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./passport/passport');

const app = express();

//Routes
let userRoutes = require('./routes/user');


//Env Variables
const port = 8080;


mongoose.connect('mongodb://localhost/puppack');

mongoose.connection.on('connected', function(){
    console.log('Mongoose is connected to localhost' )
});

mongoose.connection.on('error', function(err){
    console.log('Mongoose error: ' + err);
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/user', userRoutes);

app.listen(port, function(){
    console.log('App running on ' + port)
});

module.exports = app;