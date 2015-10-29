var figlet = require('figlet');

module.exports = function (req, res, next) {
  var text = req.body.text;
  var botPayload = {
    text : '!'
  };

  figlet(text, function(err, data) {
    if (err) {
        txt = err;
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    // write response message and add to payload
    botPayload.text = data;

    console.log('txt is...');
    console.log(botPayload);
  

    return res.status(200).json(botPayload);
  });

  
}
