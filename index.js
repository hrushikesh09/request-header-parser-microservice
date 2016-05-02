var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {

  var ip = req.connection.remoteAddress;
  ip = ip.split(":");
  //var ip = req.headers['x-forwarded-for'];
  var sw = req.headers['user-agent'].match('\(([^\)]+)\)');
  sw = sw[1].split('(');
  sw = sw[1].replace(/;/g, ',');
  var language = req.headers['accept-language'].split(',');

  var json = {
    ipaddress: ip[ip.length - 1],
    language: language[0],
    software: sw
  }

  res.send(json);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
