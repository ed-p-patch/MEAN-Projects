var express = require("express");
//console.log("Let's find out what express is", express);
var counter = 0;
var app = express();
//console.log("Let's find out what app is", app);
app.use(express.static(__dirname + "/static"));

// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    counter++; console.log(counter);
    response.render("<h3>Counter</h3>");
})

app.listen(8000, function() { console.log("listening on port 8000"); })