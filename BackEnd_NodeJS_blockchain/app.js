var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
const cors = require('cors')
const morgan = require('morgan')
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var fs = require("fs");
var posts = require('./api/posts');

var Web3= require('web3');
var provider = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

//mongoose.Promise=global.Promise;
var app = express();

var db = require('./models/db');
//var users = require('./api/users');
var users = require('./api/user');
var entreprises = require('./api/entreprise');
var campaigns = require('./api/campaigns');
var events = require('./api/events');
//var blockchain = require('./app/javascripts/app');
var app = express();

// view engine setup
//app.set('views', __dirname + '/public/views');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);






// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app')));
app.use(morgan('combined'));
app.use(cors());

app.use(session({
   secret:'futuraymen',
   resave : true,
   //saveUninitialized:false
}))
//app.use('/api/users', users);
app.use('/api/user', users);
app.use('/api/entreprises', entreprises);
app.use('/api/campaigns', campaigns);
app.use('/api/events', events);
app.use ('/api/posts',posts);
app.use(express.static('public'));
app.use(express.static('build'));
app.use(express.static('uploads'));
//app.use('/', blockchain);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});




//contract
/*
const code = fs.readFileSync('./public/contracts/Voting.sol').toString();
console.log('compiling contract...');
const compiledContract = solc.compile(code);
for (let contractName in compiledContract.contracts) {
  var bytecode = compiledContract.contracts[contractName].bytecode;
  var abi = JSON.parse(compiledContract.contracts[contractName].interface);
}

let MyContract = provider.eth.contract(abi);
console.log('deploying contract...');
  let myContractReturned = MyContract.new(1000, provider.toWei('0.55', 'ether'),['aymen','aymen2'],85600000,{
    from: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57',
    data: '0x' + bytecode,
    gas: 6600000
  }, function (err, myContract) {
    console.log("work")
  });
*/







// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
/*
app.configure(function(){
  
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'app')));
});*/
/*
app.listen(3000,()=>{

    console.log('Exemple app listening on port 3000');
});*/




module.exports = app;
