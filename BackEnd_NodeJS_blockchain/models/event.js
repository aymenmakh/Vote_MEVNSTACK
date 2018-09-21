var Campaign=require('../models/campaign');
var mongoose=require('mongoose');
var eventSchema = mongoose.Schema({
    name : {type : String },
    description : {type : String },
    candidate : {type : String},
    location : {type : String},
    type : {type : String},
    startDate : {type : Date},
    endDate : {type : Date},
    campaign:{type:mongoose.Schema.ObjectId,ref:'Campaign'}

});

module.exports=mongoose.model("Event",eventSchema);