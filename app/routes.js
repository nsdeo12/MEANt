var User=require('./models/user');

//define the apis to get the data

module.exports=function(app){
    app.get('/api/users',function(req,res){
        //use the mongoose to get the data from the db
        User.find(function(err,users){
            if(err){
                res.send(err);
                console.log("error",err);
            }
            else{
                res.json(users);
            }
        });

    });





///////////////frontend routes start here////////////
app.get('*',function(req,res){
    console.log("directory path: ",__dirname)
    res.sendFile('index.html', { root: './public' });
   // res.sendfile('./public/index.html'); //need a root directory for absolute path
   //res.sendFile(__dirname+'./public/views/index.html') //does not work becuase of __dirname
})




} //end of module.exports