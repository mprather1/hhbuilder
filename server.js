var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var config = require("./_config");
var environment = process.env.NODE_ENV || "development";
var morgan = require("morgan");
var routes = require("./routes");
var port = process.env.PORT || 8000

if (environment === "development"){
  app.use(morgan('dev'));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})
var server = app.listen(port, function(){
  if(environment === "development"){
    console.log(("Listening on port " + port + "..."))
  }
});

module.exports = server;