//requires
var express = require('express');
var routes = require('./routes');
var bodyParser = require('body-parser');
var { join } = require ('path');


//Util
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Public
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

// Engine
app.set('views', join(__dirname, '/public'));
app.set('view engine', 'ejs');


//Routes
app.use(routes);

// Running on port
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), function(){
    console.log("Server started on port " + app.get("port"));
})

