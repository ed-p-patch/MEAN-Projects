var express = require("express");
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var io = require('socket.io').listen(server)

app.get('/', function(request, response){
    response.render('main');
});

io.sockets.on('connection', function(socket){
    socket.on("process", function(data){
        var rand_num = Math.floor((Math.random() * 10) +1);
        io.emit('result', {response:data});
        io.emit('rand_num', {response:rand_num});
    })
})


app.get("/process", function(request, response){
    var data = {
        name: request.body.name, 
        language: request.body.lang,
        location: request.body.loca,
        comment: request.body.comm   
    }
    response.render('result', {user: data});
})

app.get('/', function(request, response) {
   response.render('main');
})

app.listen(8000, function() { console.log("listening on port 8000"); })