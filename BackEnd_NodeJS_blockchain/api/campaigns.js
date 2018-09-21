var express = require('express');
var router = express.Router();
var Campaign=require('../models/campaign');
var mongoose = require('mongoose');
var db=mongoose.connection;

const multer = require('multer');



 const storage = multer.diskStorage({
   destination:function(req,file,cb){
     cb(null,'./uploads');
   },
   filename:function(req,file,cb){
     cb(null,file.originalname);
   }
 });
 const upload =multer({storage:storage});
router.post('/upload',upload.single('myFile'), function(req, res) {
    console.log(req.files);
     });
router.post('/addCampaign', (req, res) => {
    var db = req.db;
    var description=req.body.description;
    var slogan=req.body.slogan;
    var status=req.body.status;
    var candidate=req.body.candidate;
    var headquarters=req.body.headquarters;
    var photo=req.body.photo;
    var startDate=req.body.startDate;
    var endDate=req.body.endDate;
if(startDate<endDate){
    var new_campaign = new Campaign({
        slogan: slogan,
        description: description,
        headquarters: headquarters,
        status: status,
        candidate: candidate,
        photo: photo,
        startDate: startDate,
        endDate: endDate
    })}
  
    new_campaign.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true,
        message: 'campaign saved successfully!'
      })
    })
  })
router.get('/', (req, res) => {
    Campaign.find({},function (error, campaigns) {
        if (error) { console.error(error); }
        res.send({
          campaigns:campaigns
        })
      })
    })
    router.get('/getcampaign/:id', (req, res) => {
      Campaign.findById(req.params.id, function (error, campaign) {
        if (error) { console.error(error); }
        res.send(campaign)
      })
    })

    router.put('/:id', (req, res) => {
      Campaign.findById(req.params.id, function (error, campaign) {
        if (error) { console.error(error); }
         campaign.description=req.body.description;
         campaign.status=req.body.status;
         campaign.candidate=req.body.candidate;
         campaign.photo=req.body.photo;
         campaign.headquarters=req.body.headquarters;
         campaign.startrsDate=req.body.startDate;
         campaign.endDate=req.body.endDate;
         campaign.save(function (error) {
          if (error) {
            console.log(error)
          }
          res.send({
            success: true
          })
        })
      })
    })
    // router.put('/:id',function (req,res) {

    //   Campaign.findById(req.params.id, function (error, campaign) {
    // var id=req.params.id;
    // var description=req.body.description;
    // var status=req.body.status;
    // var candidate=req.body.candidate;
    // var headquarters=req.body.headquarters;
    // var startrsDate=req.body.startDate;
    // var endDate=req.body.endDate;
    // Campaign.findOneAndUpdate({'_id' : id},req.body,{new:true},function (err,result) {
    //     if(err){
    //         res.send(err);
            
    //     }
            
    // res.send(result);
    
    
    // })
    
    // });

    
module.exports = router;
