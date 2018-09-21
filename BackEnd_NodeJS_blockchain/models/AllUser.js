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
   address: {type:String},
   sexe : {type:String},
   cin : {type:Number},
   photo : {type:String, default : 'drapeau.png'}, 
   voted : {type:Boolean, default : false},
   lat : {type:Number},
   long : {type:Number},
   username: {type:String,default :null},
   password: {type:String,default :null},
   entreprise: {type:String,default :null},
   email: {type:String,default :null},
   works: {type:String,default :null},
   photoMembre : {type:String, default : 'user1.png'},
 
    //AddressVOter : {type:String},
    //PrivateKey : {type:String},
    //email: { type: String, required: true, minlength: 1, trim: true },
   // password: { type: String },

},{ collection: "AlluserCustom" });

module.exports = mongoose.model("AllUser", userSchema);




