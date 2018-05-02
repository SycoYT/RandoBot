
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '^help') {
    	message.reply('This is a bot created and developed by xSycox the main cmd start char is (^) and these are the list of current commands every command will have a help cmd and the cmds are 1. ^yomama 2. ^meme 3. ^randomjokes');
  	}
    if (message.content === '^yomama help') {
    	message.reply('the yomama jokes will be ^yomama(1-50)');
  	}
    if (message.content === '^meme help') {
    	message.reply('the memes cmd are custom made or from internet the cmd will be ^meme(1-50)');
    }
    if (message.content === '^yomama 1') {
    	message.reply('yo mama so fat when she dis in call of duty the players a 5 person kill streak!!!');
    }
     if (message.content === '^yomama 2') {
    	message.reply('yo mama so stupid she thought see weed was somthing fish smoke');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
