// server.js

var express = require('express');
var app = express();
var http = require('http').Server(app);     
var path = require('path');

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index');

app.use('/', indexRouter);

http.listen(3000, function(){ 
	console.log('server on..');
});