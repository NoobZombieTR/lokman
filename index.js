const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});



bot.on("ready", async () => {
	
  console.log(`${bot.user.username} adlı bot ${bot.guilds.size} sunucusunda online!`);
  bot.user.setActivity(`loyardım - ${bot.guilds.size} sunucuda eğleniyor!`, {url: "https://www.twitch.tv/directory/game/Minecraft"});
	

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

	if(cmd === `${prefix}yardım`){
	let helpEmbed1 = new Discord.RichEmbed()
    .setTitle("Lokman Yardım Sayfası")
    .setColor(botconfig.pembe)
    .addField("Eğlence Komutları", "&ban <@kullanıcı adı> <sebep>: Kullanıcıyı sunucudan yasaklar.")
    .addField("Atma", "&kick <@kullanıcı adı> <sebep>: Kullanıcıyı sunucudan atar.")
    .addField("Mesajları Silme", "&del: Tüm mesajları siler.")
    message.channel.send(helpEmbed1);
	}
	

	 async run(message) {
    let toMeme = ['https://i.redd.it/0ilh488xbudz.png',
      'https://cdn.discordapp.com/attachments/310611569794875404/353539349742092289/image.jpg',
      'http://weknowmemes.com/wp-content/uploads/2012/02/the-internet-is-a-series-of-tubes-and-theyre-full-of-cats.jpg',
    ]
}
	toMeme = toMeme[Math.floor(Math.random() * toMeme.length)]
    message.channel.send(toMeme)
	if(cmd === `${prefix}gif`){
	message.channel.send("", {
    file: "http://www.hurriyetaile.com/userfiles/images/animation-1-3.gif"
	});
	}
	


});

bot.login("NDM4NDE2NTg0MzYxMzc3Nzk0.DcN5ng.6EHXF7ViTMP-IqO-yLDGTkzABTM");
