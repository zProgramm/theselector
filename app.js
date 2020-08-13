const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', message => {

// Variables

    var sender = message.author;
    var prefix = 'sl!'
    var msg = message.content.toUpperCase();

// Comando /ping

    if (msg === prefix + 'ping') {
    message.channel.send('Pong');
  }
});

client.login(process.env.TOKEN);