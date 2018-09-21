/**
 * Created by Dell on 14/02/2018.
 */
var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/4A',function (err,result) {
    if(err){
        return console.log("error");
    }
    return console.log("succesfully connected to mongodb");

});
module.exports=mongoose;
