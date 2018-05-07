//get the mongoose
var mongoose=require('mongoose');

//define the model and export it to be used by other files

module.exports=mongoose.model('User',{
    name:{
        type:String,
        default:''
    }
})