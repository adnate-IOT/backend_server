
var mosquittoPBKDF2 = require('./mosquitto_pbkdf2');
var express=require("express");
var app= express();
var redis = require("redis"),
client = redis.createClient(6379, "13.126.36.205");


var crypt;
var dev_id;
var token;

app.get('/api/form', function(req, res) {
   dev_id = req.param('id');
   token = req.param('token');
  
  var crypt=mosquittoPBKDF2.createPasswordAsync(token, function(newPBKDF2Password){
                console.log('New PBKDF2 hash: '+newPBKDF2Password);                
            });

});



client.on("error", function (err) {
    console.log("Error " + err);
});
// Set a value
client.set("dev_id", "token", redis.print);


client.quit();