var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {

  var ip = req.connection.remoteAddress;
  var software = req.headers['user-agent'];
  var language = req.headers['accept-language'];

  var json = {
    ipaddress: ip,
    language: language,
    software: software
  }

  res.send(json);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
