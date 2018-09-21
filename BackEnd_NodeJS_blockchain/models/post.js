var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  
      image:{type: String},
  title: {type: String},
  description:{type : String} ,
   create_date:{
        type:Date,
        default: Date.now},
        user:{type:mongoose.Schema.Types.ObjectId,ref:'Alluser'}
},{collection:'post'});

var Post = mongoose.model("post", PostSchema);
module.exports = Post;