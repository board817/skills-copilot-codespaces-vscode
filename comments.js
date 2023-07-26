// create web server
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');

var filePath = path.join(__dirname, 'comments.json');
var comments = [];

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/comments', function(req, res) {
    console.log('GET From Server');
    fs.readFile(filePath, {encoding: 'utf-8'}, function(err, data) {
        if (!err) {
            var obj = JSON.parse(data);
            console.log(obj);
            res.send(obj);
        } else {
            console.log(err);
        }
    });
});

app.post('/comments', function(req, res) {
    console.log('POST From Server');
    console.log(req.body);
    var newComment = {
        id: Date.now(), }});