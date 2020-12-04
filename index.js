const express = require('express');
const app = express();
const port = 8080;
app.use(express.static("public"));
app.set("view engine","ejs");

app.listen(port, function(){
    console.log("Your app running on port " + port);
})

app.get('/', function(req, res){
    res.render("home")
})
app.get('/home', function(req, res){
    res.render("home");
})
app.get('/store', function(req, res){
    res.render("store");
})
app.get('/features', function(req, res){
    res.render("features");
})
app.get('/news', function(req, res){
    res.render("news");
})
app.get('/list-new', function(req, res){
    res.render("list-new");
})
app.get('/buying-creal', function(req, res){
    res.render("buying-creal");
})
app.get('/lol', function(req, res){
    res.render("lol");
})
app.get('/offline', function(req, res){
    res.render("offline");
})
app.get('/helptina', function(req, res){
    res.render("helptina");
})
app.get('/midway', function(req, res){
    res.render("midway");
})
app.get('/riotgame', function(req, res){
    res.render("riotgame");
})
app.get('/bloodrayne', function(req, res){
    res.render("bloodrayne");
})
app.get('/xboxsale', function(req, res){
    res.render("xboxsale");
})
app.get('/user', function(req, res){
    res.render("user");
})
app.get('/highlight-game', function(req, res){
    res.render("highlight-game");
})
app.get('/video-1', function(req, res){
    res.render("video-1");
})
app.get('/video-2', function(req, res){
    res.render("video-2");
})
app.get('/video-3', function(req, res){
    res.render("video-3");
})
app.get('/video-4', function(req, res){
    res.render("video-4");
})
app.get('/video-4', function(req, res){
    res.render("video-4");
})
app.get('/video-5', function(req, res){
    res.render("video-6");
})
app.get('/video-7', function(req, res){
    res.render("video-7");
})


