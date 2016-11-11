var express = require("express");

app = express();

var subdomainOptions = {
  base: 'localhost' 
};

app.use(require('subdomain')(subdomainOptions));

app.get('/subdomain/api/', function(req, res, next){
  ///  works -> api.localhost
  res.send("True Subdomain");
});
app.get('/subdomain/api/v1', function(req, res, next){
  ///  works -> api.localhost
  res.send("True Subdomain 2");
});
app.get('/', function(req, res, next){
  //Show a subdomain specific dashboard.
  //example: customer1.mydomain.com would see their dashboard.
  res.send("True Main Domain");
});

app.listen("8000", function(err, res){
	if (err) throw err;

	console.log(" true run server use port: 8000")

})