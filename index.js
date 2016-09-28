var TelegramBot = require('node-telegram-bot-api');
var quotes = require('./quotes.js')();
var TOKEN = '286032770:AAH-f454dnFZt6-mq1ErpgqC6noX19EtsKM';
// Setup polling way
var bot = new TelegramBot(TOKEN, {polling: {timeout: 1, interval: 100}});

// Any kind of message
bot.onText(/\/start/, function (msg) {
  var rand = quotes[Math.floor(Math.random() * quotes.length)];

  // return;
  // var fromId = msg.from.id;
  // var resp = match[1];
  bot.sendMessage(msg.chat.id, "Hello pidary\n Жми /quote для ванильной пиздоцитатки");
});

bot.onText(/\/quote/, function (msg) {
  var rand = quotes[Math.floor(Math.random() * quotes.length)];
  bot.sendMessage(msg.chat.id, rand);
});


bot.onText(/\/whoisboss/, function (msg) {
  bot.sendMessage(msg.chat.id, "Erik Kotsiuba, сучки");
});


bot.on('text', function (msg) {
  // var chatId = msg.cId, photo, {caption: 'Lovely kittens'});
  console.log(msg);

  if (msg.from.username == 'Andrewchopko') {
    bot.sendMessage(msg.chat.id, "Оооо, я бы блять за это выпил !");
  }
});

bot.on('new_chat_participant', function (msg) {
  var chatId = msg.chat.id;
  bot.sendMessage(msg.chat.id, "Ну здарова, пидор");
});

bot.on('left_chat_participant', function (msg) {
  var chatId = msg.chat.id;
  bot.sendMessage(msg.chat.id, "Досвидосики уебок");
});
