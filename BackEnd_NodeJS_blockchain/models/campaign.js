var mongoose=require('mongoose');
var campaignSchema = mongoose.Schema({
    description : {type : String, required : true},
    slogan : {type : String, required : true},
    headquarters : {type : String, required : true},
    status : {type : String, required : false},
    candidate : {type : String, required : true},
    photo : {type : String, required : false},
    startDate : {type : Date},
    endDate : {type : Date},
    
});

module.exports=mongoose.model("Campaign",campaignSchema);