// create web server

// import modules
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost:27017/comments');

// create express app
var app = express();

// use body parser middleware to parse json
app.use(bodyParser.json());

// use cors middleware
app.use(cors());

// create mongoose schema
var Comment = mongoose.model('Comment', {});