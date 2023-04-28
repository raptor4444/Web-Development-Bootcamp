const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


var items = ["1st item", "2nd item", "3rd item"];

app.get("/", function(req, res){

    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    const day = today.toLocaleDateString("en-US", options);
    
    res.render("list", {kindofday: day, newlistItems: items});          // list is the ejs file

});

app.post("/", function(req, res){
    var item = req.body.newItem;
    items.push(item)
    res.redirect("/");
})


app.listen(3000, function(){
    console.log("server 3000 is working.")
});