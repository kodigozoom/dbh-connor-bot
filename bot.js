const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'introduce') {

       message.reply('My name is Connor. I am the Android sent by Cyberlife.');

       }

});

 

client.login(process.env.NDU4MzUxMzIwMjAyNDc3NTc4.Dgr25Q.oN95Dvza930Pm1yG7FBNUo_u_nI);
