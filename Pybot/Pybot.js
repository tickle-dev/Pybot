const discord = require('discord.js');
const { Console } = require('console');
const client = new discord.Client();

const token = require('./Config.json').token;
var Two_Hour_Timer = require('./timer.js');
const SetTimer = require('./timer.js');
const sendMessage = require('./timer.js');

client.login(token);

client.on('ready' , () => {
    let myGuild = client.guilds.cache.get('603375508431962162');
    let memberCount = myGuild.memberCount;
    let MemberCountChannel = myGuild.channels.cache.get('734728994112536626');
    MemberCountChannel.setName('Members: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));

    SetTimer.SetTimer(myGuild);

    client.user.setActivity("developing the matrix");
//blah blah
});

client.on('guildMemberAdd', member => {
    let myGuild = client.guilds.cache.get('603375508431962162');
    let memberCount = myGuild.memberCount;
    let MemberCountChannel = myGuild.channels.cache.get('734728994112536626');
    MemberCountChannel.setName('Members: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error))
});

client.on('guildMemberRemove', member => {
    let myGuild = client.guilds.cache.get('603375508431962162');
    let memberCount = myGuild.memberCount;
    let MemberCountChannel = myGuild.channels.cache.get('734728994112536626');
    MemberCountChannel.setName('Members: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error))
});

client.on('message', message => {
    let myGuild = client.guilds.cache.get('603375508431962162');
    const prefix = '!';

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'resettime') {
        var amount = parseInt(args[0]);

    if (isNaN(amount)) {
        return message.reply('that is not a number you fool!');
    } else if (amount < 1 || amount > 120) {
        return message.reply('you need to input a number between 1 and 120.');
    }
    else{ 
        clearTimeout(Two_Hour_Timer);
        message.reply(`You have reset the Server bump timer by: ${amount.toString()}`);
        amount = amount * 60000;
        var New_Timer = setTimeout(function(){ 
            setInterval(function(){
                sendMessage.sendMessage(myGuild);
            }, amount)
        });
        console.log(amount);
    }

    }

    if (command === 'originaltimer')
    {
        clearTimeout(New_Timer);
        SetTimer.SetTimer(myGuild);
        return message.reply('You have set the timer back to it 2 hour interval!');
    }
});