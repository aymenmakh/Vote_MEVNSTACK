var mongoose = require('mongoose');
var Membre = require('../models/membre');

var membresSchema = mongoose.Schema({

    nom: {type:String},
    pronom: {type:String},
    cin: {type:Number},
    email : {type:Number},
    photo : {type:String},
    poste : {type:String},
    nbAnnee : {type:String},
    cv : {type:String},

    //email: { type: String, required: true, minlength: 1, trim: true },
   // password: { type: String },

}, { collection: "membres" });


var entrepriseSchema = mongoose.Schema({

    nom: {type:String},
    description: {type:String},
    email: {type:String},  
    logo: {type:String},
    phone: {type:String},
    couleurFav:{type:String},
    fondateur: {type:String},
    secteur: {type:String},
    code: {type:Number},
    membres:{type:String},
    country:{type:String},
    //email: { type: String, required: true, minlength: 1, trim: true },
   // password: { type: String },

}, { collection: "entreprise" });

module.exports = mongoose.model("Entreprise", entrepriseSchema);