
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '~help') {
    	message.reply('This is a bot created and developed by xSycox the main cmd start char is (~) and these are the list of current commands every command will have a help cmd and the cmds are
                      -yomama
                      -meme
                      -randomjokes');
  	}
    if (message.content === 'what time is it?') {
    	message.reply('IDK what time is it?');
  	}
    if (message.content === 'Knock Knock') {
    	message.reply('MOM?');
    }
    if (message.content === 'why did the chicken cross the road?') {
    	message.reply('BEACAUSE ITS CROSSY ROAD');
    }
     if (message.content === '@RandoBot6918 spam') {
    	message.reply('@RandoBot6918 spam');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
