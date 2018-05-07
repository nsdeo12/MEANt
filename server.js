//////////////////////////////////////////////
//////////////modules/////////////////////////
//////////////////////////////////////////////
var express =require('express');
var path = require('path');
var app=express();
var bodyparser=require('body-parser');
var methodOverride=require('method-override');

//////////////////////////////////////////////
////////////// db configuration///////////////
//////////////////////////////////////////////

var db=require('./config/db');


//configure the ports
var port=process.env.PORT||8080;


//get all data stuff of the body(post)parameters
//parse application/json

app.use(bodyparser.json());

//parse application/vendor(https://github.com/dingo/api/issues/574) tree as json too
app.use(bodyparser.json({type:'application:vnd.api+json'}));



//parse application/x.www-form-urlencoded
//if you have binary (non-alphanumeric) data (or a significantly sized payload) to transmit, use multipart/form-data.
// Otherwise, use application/x-www-form-urlencoded.
app.use(bodyparser.urlencoded({extended:true}));


//use http method override to use PUT and DELETE
//https://www.hanselman.com/blog/HTTPPUTOrDELETENotAllowedUseXHTTPMethodOverrideForYourRESTServiceWithASPNETWebAPI.aspx
app.use(methodOverride('X-HTTP-Method-Override'));

//app.use(express.static(path.join(__dirname, 'public')));
//set the static files location for users
app.use(express.static(__dirname+'/public'));
console.log("dirre",__dirname);
//handle routes
require('./app/routes')(app);


//start the application
app.listen(port,function(err,cb){
    if(err){
        console.log("error at error",err);
    }
    else{console.log("server starting at 8080");}

});

//export the application

module.exports=app;