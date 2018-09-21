var express = require('express');
var router = express.Router();
var Event=require('../models/event');
var Campaign=require('../models/campaign');
var mongoose = require('mongoose');
var db=mongoose.connection;


router.post('/addEvent', (req, res) => {

    var description=req.body.description;
    var name=req.body.name;
    var location=req.body.location;
    var candidate=req.body.candidate;
    var type=req.body.type;
    var timeStart=req.body.timeStart;
    var timeEnd=req.body.timeEnd;
    var startDate=req.body.startDate;
    var endDate=req.body.endDate;
    var campaign=req.body.campaign;


    var new_event = new Event({
        name: name,
        description: description,
        location: location,
        type: type,
        candidate: candidate,
        campaign: campaign,
        timeStart:timeStart,
        timeEnd:timeEnd,
        startDate: startDate,
        endDate: endDate
    })
  
    new_event.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true,
        message: 'event saved successfully!'
      })
    })
  })
   
  router.get('/getEvents', (req, res) => {
    Event.find({},function (error, events) {
        if (error) { console.error(error); }
        res.send({
          events:events
        })
      })
    })

    router.get('/gete/:_id',function (req,res) {
        var campaignId=req.params._id;
        Event.find({campaign:campaignId}).populate('campaign').exec(function (err,result) {
            if(err){
                    res.send(err);
                }
                else{
                res.send(result);
                console.log(result);
                }
        });
        router.get('/getOneEvent/:_id',function (req,res) {
            
          Event.findById(req.params._id, function (error, event) {
                if (error) { console.error(error); }
                res.send(event);
              });
            });
    
    })
    
module.exports = router;
