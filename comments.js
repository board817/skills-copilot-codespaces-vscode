// create web server
// npm install express --save
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comment = require('./comment')

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// set view engine
app.set('view engine', 'ejs');

// set static folder
app.use(express.static('./public'));

// get request
app.get('/', function(req, res){
    res.render('index');
});

app.get('/comments', function(req, res){
    res.render('comments', {comments: comment});
});

// post request
app.post('/comments', urlencodedParser, function(req, res){
    console.log(req.body);
    comment.push(req.body);
    res.render('comments', {comments: comment});
});

// listen on port
app.listen(port, function(){
    console.log('Listening on port ' + port);
});