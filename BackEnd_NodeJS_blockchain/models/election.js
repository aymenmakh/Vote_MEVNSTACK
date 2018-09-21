/**
 * Created by Dell on 14/02/2018.
 */
var mongoose = require('mongoose');
var userSchema = mongoose.Schema({

    startDate : {type : Date},
    endDate : {type : Date},
    c1 : {type:String},
    c2 : {type:String},
    photo1 : {type:String},
    photo2 : {type:String}
    //email: { type: String, required: true, minlength: 1, trim: true },
   // password: { type: String },

},{ collection: "electionCustom" });

module.exports = mongoose.model("Election", userSchema);




