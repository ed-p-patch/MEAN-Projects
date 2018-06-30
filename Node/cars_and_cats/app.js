var http = require('http'); var fs = require('fs');
var server = http.createServer(function (request, response){
    console.log('client request url: ', request.url);

    if(request.url === '/cars'){
        fs.readFile('./views/cars.html', 'utf8', function(errors, contents){
            serve_it(contents, 'dom', response);
        });
    }
    else if(request.url === '/cars/new'){
        fs.readFile('./views/new.html', 'utf8', function(errors, contents){
            serve_it(contents, 'dom', response);
        });
    }
    else if(request.url === '/cats'){
        fs.readFile('./views/cats.html', 'utf8', function(errors, contents){
            serve_it(contents, 'dom', response);
        });
    }
    else if(request.url === '/images/corvette.jpg'){
        fs.readFile('./images/corvette.jpg', function(errors, contents){
            serve_it(contents, 'img', response);
        });
    }
    else if(request.url === '/images/viper.jpg'){
        fs.readFile('./images/viper.jpg', function(errors, contents){
            serve_it(contents, 'img', response);
        });
    }
    else if(request.url === '/images/scuba.jpg'){
        fs.readFile('./images/scuba.jpg', function(errors, contents){
            serve_it(contents, 'img', response);
        });
    }
    else if(request.url === '/images/coonkitten.jpg'){
        fs.readFile('./images/coonkitten.jpg',  function(errors, contents){
            serve_it(contents, 'img', response);
        });
    }
    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
            serve_it(contents, 'css', response);
        });
    }
    else{ response.writeHead(404); response.end('File not found!!'); }
});

function serve_it(contents, media, response){
    if(media == 'dom'){ response.writeHead(200, {'Content-Type': 'text/html'}); }
    else if(media == 'img'){ response.writeHead(200, {'Content-Type': 'image/jpeg'}); }
    else if(media == 'css'){ response.writeHead(200, {'Content-Type': 'text/css'}); }
    response.write(contents);
    response.end();
};

server.listen(6789);
console.log("Running in localhost at port 6789");