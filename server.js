var express = require('express');
var app = express();

var PORT = process.env.port || 3000;

var middleware = require('./webserver-middleware.js');



app.use(middleware.logger);

//app.use(middleware.requireAuthentication);

app.get('/about',middleware.requireAuthentication,function(req,res){
    res.send('Hello bitchy');
});

app.use(express.static(__dirname + '/public'));
app.listen(PORT,function(){
    console.log('Server started on '+PORT);
});