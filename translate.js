var tbot = require('node-telegram-bot-api');
var rqst = require('request');
var apiKey = "1154308437:AAFnGCPandI8z9UCuRUI-Dn0Rmu4i3nk7e0";

var bot = new tbot(apiKey,{polling:true});

bot.on('message',function(msg){
  if(msg.text==="/start" || msg.text === "/yes")
  {
    bot.sendMessage(msg.chat.id,"Hello TANUJA,Send me the URL that you need to take a full page screenshot.");
  }
  else if((msg.text).includes("http"))
  {
    rqst(
    "http://api.screenshotlayer.com/api/capture?access_key=295acc1127c661e03610c841f739b98e",function(error,request,body){
      if(error)
      {
        bot.sendMessage("pls, send the existing URL!")
      }
      else
      {
        bot.sendPhoto(msg.chat.id,"http://api.screenshotlayer.com/api/capture?access_key=295acc1127c661e03610c841f739b98e&url="+msg.text+"&viewport=1440x900&width=1240&fullpage=1");

      }
      
    })
    
  }
  else if(msg.text === '/exit'){
    bot.sendMessage(msg.chat.id, 'Do You Want To Continue.....', {
        'reply_markup': {
            'keyboard': [['/yes', '/no']],
            resize_keyboard: true,
            one_time_keyboard: true,
            force_reply: true,
        }
    });
}
else if(msg.text === '/no'){
    bot.sendMessage(msg.chat.id,"Byeeee...." + "\n" + "Hope to see you again");
}
  else{
    bot.sendMessage("pls, send the existing URL!")
  }

})
bot.on("polling_error", (err) => console.log(err));