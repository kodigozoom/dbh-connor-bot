const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

client.login(process.env.NDU4MzUxMzIwMjAyNDc3NTc4.Dgr25Q.oN95Dvza930Pm1yG7FBNUo_u_nI);
