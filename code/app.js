var express = require('express');
var app = express();
var http = require('http').Server(app);

/**app.get('/', function(req, res) {
    res.send('<h1>Hello world</h1>');
});

app.get('/nike', function(req, res) {
    res.send('<h1>Hello nike</h1>');
});**/

http.listen(1337, function(){
        console.log('listening on *:1337');
});

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));

app.use('/img', express.static(__dirname + '/img'));






app.get('/accueil', function(req,res) {
    res.sendFile(__dirname + '/html/kentix.html');
});

app.get('/artiste', function(req,res) {
    res.sendFile(__dirname + '/html/artiste.html');
});

app.get('/music', function(req,res) {
    res.sendFile(__dirname + '/html/music.html');
});