//jshint esversion:18

var express = require('express');
var app = express();

app.get("/", function(req, res){
    res.send("<h1>hello world!</h1>")
});

app.get("/about", function(req,res){
    res.send("Hello, I am Nishant.")
})

app.listen(3000, function(){
    console.log("Server started on 3000");
})
