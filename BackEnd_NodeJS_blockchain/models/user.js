/**
 * Created by Dell on 14/02/2018.
 */
var mongoose = require('mongoose');
var userSchema = mongoose.Schema({

   firstName: {type:String},
   lastName : {type:String},
   DateNaissance : {type:String},
   LieuNaissance : {type:String},
   addressActuel : {type:String},
   Profession : {type:String},
   DateCin : {type:String},
   address: {type:String},
   privateKey: {type:String},
   cin : {type:Number},
   entreprise: {type:String,default :null},
   username: {type:String,default :null},
   password: {type:String,default :null},
   photo : {type:String, default : 'id.jpg'},
   entreprise: {type:String,default :null},
   email: {type:String,default :null},
   works: {type:String,default :null},
   photoMembre : {type:String, default : 'user1.png'},
      //voted : {type:Number, default : 'not'},
   Tel : {type:Number, default : null}
    //AddressVOter : {type:String},
    //PrivateKey : {type:String},
    //email: { type: String, required: true, minlength: 1, trim: true },
   // password: { type: String },

},{ collection: "userCustom" });

module.exports = mongoose.model("User", userSchema);




