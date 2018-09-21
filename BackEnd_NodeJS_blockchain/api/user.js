/**
 * Created by Dell on 14/02/2018.
 */

const Nexmo = require("nexmo");
const nexmo = new Nexmo({
  apiKey: "c12c3f66",
  apiSecret: "E0lHfY5Ll3h3QHOt"
});
var express = require("express");
const ejs = require("ejs");
var fs = require("fs");
var router = express.Router();
var User = require("../models/user");
var Election = require("../models/election");
var AllUser= require("../models/Alluser");

var bcrypt = require("bcrypt-nodejs");
var middlwere = require("../api/middlwere.js");
var jwt = require("jsonwebtoken");
var Web3EthAccounts = require("web3-eth-accounts");
var account = new Web3EthAccounts("ws://localhost:7545");
const data = require("../data.json");
var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
var Eth = require("web3-eth");
var eth = new Eth(new Eth.providers.HttpProvider("http://localhost:7545"));
var pdf = require("pdfkit");
var Busboy = require("busboy");

var multer = require("multer");

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function(req, file, cb) {
    cb(null,file.originalname);
  }
});
var upload = multer({ storage: storage });
var web3c = new Web3(web3.currentProvider);

router.get("/test", function(req, res) {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.send("aymenn");
});

router.get("/authenticate", function(req, res) {
  res.render("form.html", { title: "Vuillez inserer votre CIN" });
});

router.get("/getUser/:cin", function(req, res) {
  User.findOne({ cin: req.params.cin }, function(err, data) {
    //req.session.user = data;
    console.log(req.session.id);
    res.send(data);

    //res.json(result[0].medias);
  });
});

router.get("/getUserid/:id", function(req, res) {
  User.findOne({ _id: req.params.id }, function(err, data) {
    //req.session.user = data;
    console.log(req.session.id);
    res.send(data);

    //res.json(result[0].medias);
  });
});

router.post("/authenticate", function(req, res) {
  User.findOne({ cin: req.body.cin }, function(err, data) {
    if (!data) {
      let user = verif(req.body.cin);
      if (user != null) {
        console.log(user);
        register(user);
        res.send(user);
      } else {
        res.send(err);
        console.log("user existe pas");
      }
    } else {
      console.log(req.body.cin);
      res.send("message");
    }
  });
});
function verif(cin) {
  var i = 0;
  while (i < data.length) {
    if (data[i].cin == cin) {
      return data[i];
    }
    i++;
  }
  return null;
}

function register(u) {
  var acc = account.create(JSON.stringify(u._id));
  console.log(acc.address);
  var file = JSON.parse(fs.readFileSync("./account.json"));
  console.log("avant push acc");
  file.push(acc);
  console.log("push acc");
  var source = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57";
  eth
    .sendTransaction({
      from: source,
      to: acc.address,
      value: web3.toWei(1, "ether")
    })
    .then(console.log("sendtrans"));

  web3.eth.getAccounts(console.log);

  fs.writeFileSync("./account.json", JSON.stringify(file));
  adr = acc.privateKey;
  var user = new User({
    cin: u.cin,
    firstName: u.firstName,
    address: acc.address,
    privateKey: acc.privateKey,
    lastName: u.lastName,
    DateNaissance: u.DateNaissance,
    LieuNaissance: u.LieuNaissance,
    addressActuel: u.addressActuel,
    Profession: u.Profession,
    DateCin: u.DateCin,
    tel: u.tel
  });
  console.log(user);
  user.save().then(user => {
    console.log(user);
  });
}

router.post("/tel", (req, res) => {
  let phoneNumber = req.body.number;
  console.log(phoneNumber);
  nexmo.verify.request(
    { number: phoneNumber, brand: "Awesome Company" },
    (err, result) => {
      if (err) {
        res.sendStatus(500);
      } else {
        let requestId = result.request_id;
        if (result.status == "0") {
          res.send(result.request_id); // Success! Now, have your user enter the PIN
        } else {
          res.status(401).send(result.error_text);
        }
      }
    }
  );
});

router.post("/verify", (req, res) => {
  let pin = req.body.pin;
  let requestId = req.body.requestId;

  nexmo.verify.check({ request_id: requestId, code: pin }, (err, result) => {
    if (err) {
      // handle the error
      console.log(pin);
      console.log(requestId);
    } else {
      if (result && result.status == "0") {
        // Success!
        // res.status(200).send('Account verified!');
        var myDoc = new pdf();
        myDoc.pipe(fs.createWriteStream(pin + ".pdf"));
        myDoc
          .font("Times-Roman")
          .fontSize(48)
          .text("This is your private Key  ", 100, 100);
        myDoc.end();
        // res.redirect('http://localhost:8080/');
        res.send("jawek behy");
      } else {
        console.log("pin");
        // handle the error - e.g. wrong PIN
      }
    }
  });
});

router.get("/photo", function(req, res) {
  res.render("photo.html");
});

router.post("/photo", upload.any(), function(req, res) {
  console.log(req.files);
  res.send(req.files);
});

router.put("/editUser/:cin", (req, res) => {
  //var db = req.db;
  User.findOneAndUpdate({ cin: req.params.cin }, req.body, function(err, post) {
    if (err) {
      res.send(err);
    }

    res.json({ message: "bara thabet" });
  });
});

router.get("/all", function(req, res) {
  User.find({}, function(err, result) {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});


router.post("/allPeople", function(req, res) {
  let provider = new Web3(
    new Web3.providers.HttpProvider("http://localhost:7545")
  );

    var i = 0;
    while (i < data.length) {

    var All = new AllUser({
    cin: data[i].cin,
    firstName: data[i].firstName,
    lastName: data[i].lastName,
    DateNaissance: data[i].DateNaissance,
    LieuNaissance: data[i].LieuNaissance,
    addressActuel: data[i].addressActuel,
    Profession:data[i].Profession,
    DateCin: data[i].DateCin,
    sexe : data[i].sexe,
    address :  provider.eth.accounts[i],
    lat : data[i].lat,
    long : data[i].long
    
  });
  All.save().then(All => {
    console.log(All);
  });
     i++
} 
res.send("jawek behy");
});

router.get("/AllPeople", function(req, res) {
  AllUser.find({}, function(err, result) {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});



router.get("/getPeople/:cin", function(req, res) {
  AllUser.findOne({ cin: req.params.cin }, function(err, data) {
    //req.session.user = data;
    console.log(req.session.id);
    res.send(data);

    //res.json(result[0].medias);
  });
});

router.delete("/delete/:cin", (req, res) => {
  //var db = req.db;
  User.findOneAndRemove({ cin: req.params.cin }, req.body, function(err, post) {
    if (err) {
      res.send(err);
    }

    res.json({ message: "bara thabet" });
  });
});

router.put("/update/:cin", (req, res) => {
  //var db = req.db;
  AllUser.findOneAndUpdate({ cin: req.params.cin }, req.body, function(err, post) {
    if (err) {
      res.send(err);
    }

    res.json({ message: "bara thabet" });
  });
});

router.post("/election", function(req, res) {

    var elec = new Election({
      startDate : req.body.startDate,
      endDate  : req.body.endDate,
      photo1 : req.body.photo1,
      photo2 : req.body.photo2,
      c1 : req.body.c1,
      c2 : req.body.c2
});
elec.save().then(All => {
  console.log(All);
});

});

router.get("/election", function(req, res) {

  Election.find({}, function(err, result) {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

router.get("/voted", function(req, res) {

  AllUser.count({voted:true}, function(err, result) {
    if (err) {
      res.send(err);
    }
  res.send(""+result)
  });
});

router.get("/Novoted", function(req, res) {

  AllUser.count({voted:false}, function(err, result) {
    if (err) {
      res.send(err);
    }
  res.send(""+result)
  });
});
router.get("/mal", function(req, res) {

  AllUser.count({sexe:"M",voted:true}, function(err, result) {
    if (err) {
      res.send(err);
    }
  res.send(""+result)
  });
});

router.get("/femal", function(req, res) {

  AllUser.count({sexe:"F",voted:true}, function(err, result) {
    if (err) {
      res.send(err);
    }
  res.send(""+result)
  });
});

router.get("/country/:country", function(req, res) {

  AllUser.count({LieuNaissance:req.params.coutry,voted:true}, function(err, result) {
    if (err) {
      res.send(err);
    }
  res.send(""+result)
  });
});
router.get("/Sfax", function(req, res) {

  AllUser.count({LieuNaissance:"Sfax",voted:true}, function(err, result) {
    if (err) {
      res.send(err);
    }
  res.send(""+result)
  });
});

router.get("/Nabeul", function(req, res) {

  AllUser.count({LieuNaissance:"Nabeul",voted:true}, function(err, result) {
    if (err) {
      res.send(err);
    }
  res.send(""+result)
  });
});
router.get("/Bizerte", function(req, res) {

  AllUser.count({LieuNaissance:"Bizerte",voted:true}, function(err, result) {
    if (err) {
      res.send(err);
    }
  res.send(""+result)
  });
});
router.get("/Beja", function(req, res) {

  AllUser.count({LieuNaissance:"Beja",voted:true}, function(err, result) {
    if (err) {
      res.send(err);
    }
  res.send(""+result)
  });
});
router.get("/Tunis", function(req, res) {

  AllUser.count({LieuNaissance:"Tunis",voted:true}, function(err, result) {
    if (err) {
      res.send(err);
    }
  res.send(""+result)
  });
});

router.get("/Nabeul", function(req, res) {

  AllUser.count({LieuNaissance:"Nabeul",voted:true}, function(err, result) {
    if (err) {
      res.send(err);
    }
  res.send(""+result)
  });
});

router.get("/Sousse", function(req, res) {

  AllUser.count({LieuNaissance:"Sousse",voted:true}, function(err, result) {
    if (err) {
      res.send(err);
    }
  res.send(""+result)
  });
});
router.get("/Gabes", function(req, res) {

  AllUser.count({LieuNaissance:"Gabes",voted:true}, function(err, result) {
    if (err) {
      res.send(err);
    }
  res.send(""+result)
  });
});

router.delete("/deleteUser/:cin", (req, res) => {
  //var db = req.db;
  AllUser.findOneAndRemove({ cin: req.params.cin }, req.body, function(err, post) {
    if (err) {
      res.send(err);
    }

    res.json({ message: "bara thabet" });
  });
});

router.delete("/deleteElection", (req, res) => {
  //var db = req.db;
  Election.remove({},function(err, post) {
    if (err) {
      res.send(err);
    }

    res.json({ message: "bara thabet" });
  });
});

  //var db = req.db;
 

module.exports = router;
