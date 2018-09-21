var mongoose = require('mongoose');
var Membre = require('../models/membre');

var membresSchema = mongoose.Schema({

    nom: {type:String},
    prenom: {type:String},
    cin: {type:Number},
    email : {type:Number},
    photo : {type:String},
    poste : {type:String},
    nbAnnee : {type:String},
    cv : {type:String},

    //email: { type: String, required: true, minlength: 1, trim: true },
   // password: { type: String },

}, { collection: "membres" });

module.exports = mongoose.model("Membres", membresSchema);