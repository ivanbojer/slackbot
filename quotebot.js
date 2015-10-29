var http = require('http');

module.exports = function (req, res, next) {
  var botPayload = {
    text : '!'
  };

  var options = {
    host: 'api.theysaidso.com',
    port: 80,
    path: '/qod.json'
  };

  http.get(options, function(resp){
    resp.setEncoding('utf8');
    resp.on('data', function(chunk){
      obj = JSON.parse(chunk);
      botPayload.text = obj.contents.quotes[0].quote;
      return res.status(200).json(botPayload);
    });
  }).on("error", function(e){
    console.log("Got error: " + e.message);
  });
}
