var figlet = require('figlet');

module.exports = function (req, res, next) {
  var text = req.body.text;
  var result = text.split(":");
  txt = result[1];

  if (txt == '') {
    txt = result;
  };

  var botPayload = {
    text : '!'
  };

  figlet(txt, {
    horizontalLayout: 'fitted',
    verticalLayout: 'fitted'
  },
  function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    };

    // write response message and add to payload
    botPayload.text = data;

    //console.log('txt is...');
    //console.log(botPayload);
  

    return res.status(200).json(botPayload);
  });

  
}
