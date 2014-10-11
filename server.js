var http = require("http");
var express = require('express');
var mongojs = require("mongojs");
var applications = require('./public/features/services/server.js');
var app = express();
app.use(express.static(__dirname + '/public/'));
app.use(express.bodyParser());
var mongodbConnectionString = process.env.OPENSHIFT_MONGODB_DB_URL + "MEANStack";
if(typeof process.env.OPENSHIFT_MONGODB_DB_URL == "undefined"){
    mongodbConnectionString = "MEANStack";
}

var db = mongojs(mongodbConnectionString,["applications"]);


applications(app, db, mongojs);


var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;




app.get("/env",function(req,res){
    res.json(process.env);
});

var server = app.listen(port, ipaddress, function () {
    console.log("Hello:");
    console.log(process.env);
});