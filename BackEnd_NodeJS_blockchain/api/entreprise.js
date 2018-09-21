const express = require('express')
var Entreprise = require("../models/entreprise");
var Membre = require("../models/membre");
var Vote = require("../models/votesession");
var router = express.Router();
const multer = require('multer');
//var User = require("../models/user");
var nodemailer = require('nodemailer');
var User= require("../models/Alluser");
//var csv =require('fast-csv');
var fs = require('fs');
var sheetToJson = require('csv-xlsx-to-json');
var xlsxtojson = require("xlsx-to-json");
let csvToJson = require('convert-csv-to-json');

const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'./members/');
  },
  filename:function(req,file,cb){
    cb(null,file.originalname);
  }
});
const storage1 = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'./uploads');
  },
  filename:function(req,file,cb){
    cb(null,file.originalname);
  }
});
const upload =multer({storage:storage});
const upload1 =multer({storage:storage1});






//
router.get('/', (req, res) => {
  Entreprise.find({}, function (error, entreprises) {
      if (error) { console.error(error); }
      res.send({
        entreprises: entreprises
      })
    }).sort({_id:-1})
  })

  router.get('/:id/membres/', (req, res) => {
    var db = req.db;
    var namefile;
    Entreprise.findOne({code:req.params.id}, function (error, entreprise) {
      if (error) { console.error(error); }
      var namefile="members/"+entreprise.membres;
      let json = csvToJson.getJsonFromCsv(namefile);
res.send({membres:json})
     
   });  


  
    })
  
    router.post('/uploadimage',upload1.single('myFile'), function(req, res) {
    console.log("image added");
       });
    router.get('/:id/privatevotes/', (req, res) => {
      var db = req.db;
      Vote.findOne({entreprise:req.params.id}, function (error, vote) {
        if (error) { console.error(error); }
        res.send(vote)
      })
    })

  ///
  router.post('/', (req, res) => {
    var db = req.db;

    var nom = req.body.nom;
    var description = req.body.description;
    var secteur = req.body.secteur;
    var fondateur = req.body.fondateur;
    var email = req.body.email;
    var phone = req.body.phone;
    var country = req.body.country;
    var code = req.body.code;
    var membres = req.body.membres;
    //console.log("hedi"+m);

      var new_entreprise = new Entreprise({
      nom: nom,
      description: description, 
      secteur:secteur,
      email:email,
      country:country,
      phone:phone,
      code:code,
      membres:membres
    })

    new_entreprise.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true,
        message: 'entreprise saved successfully!'
      })
    })
  })
  ////
///
// Fetch single post
router.get('/:id', (req, res) => {
    var db = req.db;
    Entreprise.findById(req.params.id, function (error, entreprise) {
      if (error) { console.error(error); }
      res.send(entreprise)
    })
  })
  router.get('/new/:id', (req, res) => {
    var db = req.db;
    console.log("correct:"+req.params.id);
    Entreprise.findOne({code:req.params.id}, function (error, entreprise) {
      if (error) { console.error(error); }
      res.send(entreprise)
      console.log("entre :"+entreprise);

    })
  })

  
  
  // Update a post
  router.put('/:id', (req, res) => {
    var db = req.db;
    Entreprise.findOne({code:req.params.id}, function (error, entreprise) {
      if (error) { console.error("errrrreeeeer"); }
  
      entreprise.logo = req.body.logo
      entreprise.couleurFav = req.body.couleurFav
      entreprise.save(function (error) {
        if (error) {
          console.log("ez")
        }
        res.send({
          success: true
        })
      })
    })
  })
////
router.put('/user/:id', (req, res) => {
  var db = req.db;
  User.findOne({ 
    cin: req.params.id
  
  }, function (error, users) {
    if (error) { console.error("errrrreeeeer"); }
console.log(req.body.photoMembre);
    users.photoMembre = req.body.photoMembre
    users.save(function (error) {
      if (error) {
        console.log("ez")
      }
      res.send({
        success: true
      })
    })
  })
})
////
// Delete a post
router.delete('/:id', (req, res) => {
    var db = req.db;
    Entreprise.remove({
      _id: req.params.id
    }, function(err, entreprise){
      if (err)
        res.send(err)
      res.send({
        success: true
      })
    })
  })
  router.post('/upload',upload.single('myFile'), function(req, res) {
    console.log("image added");
     });
     router.post('/privatevote', (req, res) => {
      
      var nom = req.body.nom;
      var date_debut = req.body.date_debut;
      var date_fin=req.body.date_fin;
      var elu=req.body.elu;
      var description=req.body.description;
      var entreprise=req.body.entreprise;
      var new_Vote = new Vote({
        nom: nom,
        date_debut:date_debut,
        date_fin:date_fin,
        description:description,
        elu:elu,
        entreprise:entreprise
      })
      register(entreprise);
      new_Vote.save(function (error) {
        if (error) {
          console.log(error);
        }
        res.send({
          success: true,
          message: 'entreprise saved successfully!'
        })
      })
    })

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'am27.05.95@gmail.com',
        pass: 'Amas270595++'
      }
    });
    
    



  function register(id) {
    Entreprise.findOne({code:id}, function (error, entreprise) {
      if (error) { console.error(error); }

        var namefile="members/"+entreprise.membres;
        let json = csvToJson.getJsonFromCsv(namefile);
        for(let i=0; i<json.length;i++){
              var user = new User({
      cin: json[i].cin,
      firstName: json[i].prenom,
      lastName: json[i].nom,
      entreprise:id,
      email:json[i].email,
      work:json[i].poste

    });
    //console.log(user);
    user.save().then(user => {
      //console.log(user);
    });

    var mailOptions = {
      from: 'am27.05.95@gmail.com',
      to: json[i].email,
      subject: 'Election',
      text: 'Hi '+ json[i].prenom +' '+ json[i].nom+ ',\n we have an election in our enterprise ! \n you can cast a vote by connection to this web site www.voty.com :\n username : your mail \n password : your cin'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log("dd");
      } else {
        console.log('Email sent: ' + info.response);
      }
    });




        }
   });
  }
  router.post("/thisuser", function(req, res) {
    User.findOne({ 
      cin: req.body.cin
    
    }, function(err, data) {
      //req.session.user = data;
      //console.log(data);
      res.send({user:data});
  
      //res.json(result[0].medias);
    });
  });
  router.post("/login", function(req, res) {
    User.findOne({ 
      cin: req.body.cin,
     

    }, function(err, data) {
      //req.session.user = data;
      console.log(data.cin);
      res.send({user:data});
  
      //res.json(result[0].medias);
    });
  });
  router.post("/getprivatevote", function(req, res) {
    Vote.find({ 
      entreprise: req.body.id
    
    }, function(err, data) {
      //req.session.user = data;
      //console.log(data);
      res.send({vote:data});
  
      //res.json(result[0].medias);
    });
  });
  router.get("/getUser/:id", function(req, res) {
    User.findOne({ 
      cin: req.params.id
    
    }, function(err, data) {
      //req.session.user = data;
      //console.log(data);
      res.send({user:data});
  
      //res.json(result[0].medias);
    });
  });
  module.exports = router;
////
