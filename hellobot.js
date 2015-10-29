module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var channelID = req.body.channel_id;

  var botPayload = {
    text : 'Hello, ' + userName + '! It is great to see you hanging with me at ' + channelID
  };

  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}
