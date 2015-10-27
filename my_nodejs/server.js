var express = require("express");

//
var DEFAULT_PORT = 8080,
    PORT = process.env.PORT = DEFAULT_PORT;
    
//
var app = express();
app.get('/', function(req, res){
    res.send('Hello Gogistics!');
});

app.listen(PORT);
console.log("Hosting server is running on http://localhost:" + PORT);
