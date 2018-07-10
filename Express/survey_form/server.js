var express = require("express");
//console.log("Let's find out what express is", express);

var app = express();
//console.log("Let's find out what app is", app);
//app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

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