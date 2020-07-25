const discord = require('discord.js');
const client = new discord.client();

const token = require('./package.json').token;

client.login(token);

client.on('ready', () => {
    let myGuild = client.guilds.get('603375508431962162')
    let memberCount = myGuild.memberCount;

})


