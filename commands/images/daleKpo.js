const Discord = require('discord.js');

module.exports = 
{
  name: "dale",
  aliases: [],
  description: "Eres un kpo",
  run: async (client, message, args) => 
  {
    if(args[0].toLowerCase() === "capo" || args[0].toLowerCase() === "kpo")
    {
      const img = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/755955428923277324/840086863100117032/2Q.png");
      message.channel.send(img);
    }
  }
}