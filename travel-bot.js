var TelegramBot = require('node-telegram-bot-api');
var TOKEN = '244182881:AAFSUpnhSYx6TApEy5Kx5N6bVRm6VUe4aAc';
// Setup polling way
var bot = new TelegramBot(TOKEN, {polling: {timeout: 1, interval: 100}});



bot.onText(/\/travel (.+)/, function (msg, match) {
  var resp = match[1];
  console.log(msg)
  if(msg.from.last_name == 'Goncharenko') {
    bot.sendMessage(msg.chat.id,'Путевка "нахуй" выдана на имя - '+resp).then(() => {
      var pct = ~~(Math.random() * 100);
      if (pct > 70) {
        bot.sendMessage(msg.chat.id,"Счастливого пути !");
      }
    });
  } else {
    bot.sendMessage(msg.chat.id,'Идите нахуй, '+msg.from.first_name+', вы не уполномочены выебываться');
  }
});


bot.onText(/\/start/, function (msg, match) {
  bot.sendMessage(msg.chat.id,"Счастливого пути !");
});

bot.onText(/\/estus/, function (msg, match) {
  var chatId = msg.chat.id;
// photo can be: a file path, a stream or a Telegram file_id
var photo = 'estus.png';
bot.sendPhoto(chatId, photo, {caption: 'На, выпей '+ msg.from.first_name}).then(() => {
  var pct = ~~(Math.random() * 100);
  if (pct > 30) {
    bot.sendMessage(msg.chat.id,"Но лучше бы ты выпил водки :с");
  }
});
});
