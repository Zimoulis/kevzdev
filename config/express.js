//THIS MODULE WILL GRAB THE BASIC EXPRESS IMPORT
//I WILL THEN CONFIGURE EXPRESS HERE FOR MY APP 
//AND THEN RETURN IT SO MY SERVER IS WORKING WITH MY CUSTOM EXPRESS SERVER
//THIS WILL ALSO HIDE THE COMPLEXITIES FROM SERVER.JS


var express = require('express');
var http = require('http');  
  
 module.exports = function(){
      
      var app = express();
      var server = http.createServer(app);
      
     
     //THIS MODULE WILL DEFINE ALL OUR CUSTOM ROUTES
     require('./route_config')(app);
         
     //THIS DEFINES OUT PUBLIC FOLDER ANYTHING TO SERVER UP FREELY   
     //MUST USE STATIC LAST  
     app.use(express.static('./public'));    
         
     //ANY NON PAGE SEND A 404 NEEDS TO BE LAST LOOKS FOR ROUTES IN ORDER
     app.get('*',function(req, res){
        res.status(400).send("Page Not Found");
      });
      
      
        
      return server;
      
  }