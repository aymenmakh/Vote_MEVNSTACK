
var mongoose = require('mongoose');


var replySchema = mongoose.Schema({
    texte : { type : String} , 
    comment:{type:mongoose.Schema.Types.ObjectId,ref:'comment'} , 
    user:{type:mongoose.Schema.Types.ObjectId,ref:'Alluser'},
    postedAt : { type: Date  ,default : Date.now}
}, {collection : "reply"});

module.exports = mongoose.model("reply",replySchema);