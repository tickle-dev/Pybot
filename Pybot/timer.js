
function SetTimer(myGuild){
var Two_Hour_Message = setTimeout(function(){ 
    sendMessage(myGuild); // send the message once
    var dayMillseconds = 1000 * 60 * 60 * 2; // math for milliseconds to 2 hours
    setInterval(function(){ // repeat this every 2 hours
        sendMessage(myGuild);
    }, dayMillseconds)
});
return Two_Hour_Message;
}
function sendMessage(myGuild){

    myGuild.channels.cache.get('734188152037572608').send("<@246190853096341504> and <@254832481407074304> it is time to bump your server! Please type !d bump.");
    
}
//export {SetTimer};
module.exports = {SetTimer: SetTimer, sendMessage: sendMessage, Two_Hour_Message: Two_Hour_Message};
