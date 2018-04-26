const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});



bot.on("ready", async () => {
	
  console.log(`${bot.user.username} adlı bot ${bot.guilds.size} sunucusunda online!`);
  bot.user.setActivity(`&yardim - ${bot.guilds.size} sunucuda online!`, {url: "https://www.twitch.tv/directory/game/Minecraft"});
	

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
var msg = message.content.toUpperCase();
  var sender = message.author;

	
	

	
	if(cmd === `${prefix}limonbebek`){
	message.channel.send("", {
    file: "http://www.hurriyetaile.com/userfiles/images/animation-1-3.gif" // Or replace with FileOptions object
});
		}


});

bot.login(process.env.BOT_TOKEN);
