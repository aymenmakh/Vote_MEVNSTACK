var mongoose = require('mongoose');


var privateVoteSchema = mongoose.Schema({

    nom: {type:String},
    date_debut: {type:Date},
    date_fin: {type:Date},  
    description: {type:String},
    entreprise:{type:String},    
    elu:[]
   
    //email: { type: String, required: true, minlength: 1, trim: true },
   // password: { type: String },

}, { collection: "privatevote" });

module.exports = mongoose.model("VoteSession", privateVoteSchema);