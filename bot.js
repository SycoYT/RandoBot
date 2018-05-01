
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hello bot') {
    	message.reply('hello good sir :D');
  	}
    if (message.content === 'what time is it?') {
    	message.reply('IDK what time is it?');
  	}
    if (message.content === 'Knock Knock') {
    	message.reply('MOM?');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
