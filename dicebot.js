module.exports = function (req, res, next) {
  function roll (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var userName = req.body.user_name;
  var botPayload = {
    text : '!'
  };

  number = 0;
  for (var i = 0; i < 10; i++) {
    number=roll(1,10);
  }

  // write response message and add to payload
  botPayload.text = req.body.user_name + ' rolled ' + number;

  return res.status(200).json(botPayload);
}
