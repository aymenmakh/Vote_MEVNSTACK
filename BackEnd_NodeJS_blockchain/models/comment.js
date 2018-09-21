
var mongoose = require('mongoose');


var commentSchema = mongoose.Schema({
    texte : { type : String} , 
    post:{type:mongoose.Schema.Types.ObjectId,ref:'post'} , 
    user:{type:mongoose.Schema.Types.ObjectId,ref:'Alluser'},
    postedAt : { type: Date  ,default : Date.now}
}, {collection : "comment"});

module.exports = mongoose.model("comment",commentSchema);