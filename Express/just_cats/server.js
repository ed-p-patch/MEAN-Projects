var express = require("express");

var app = express();
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/cats", function (request, response){ response.render('cats'); })

app.get("/scuba", function (request, response){ response.render('one_cat', {cat:cat_data[0]});})
app.get("/cuddles", function (request, response){ response.render('one_cat', {cat:cat_data[1]});})
app.get("/coonkitten", function (request, response){ response.render('one_cat', {cat:cat_data[2]});})

app.listen(8000, function() { console.log("listening on port 8000"); })

cat_data = [
    {
        name: 'cuddles',
        age: '4',
        food: 'spaghetti',
        spots: ['under the bed', 'in a sunbeam', 'in the grass']
    },
    {
        name: 'scuba',
        age: '6',
        food: 'fish n chips',
        spots: ['in the boat', 'near the fish tank']
    },
    {
        name: 'coonkitten',
        age: '1',
        food: 'small bugs',
        spots: ['in the grass', 'under the tree']
    }
]