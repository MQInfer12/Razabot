const Discord = require('discord.js');

var contrbot = 0;

module.exports = 
{
  name: "razabot",
  aliases: [],
  description: "Acepta la galleta",
  run: async (client, message, args) => 
  {
    contrbot++;

    if(contrbot == 3)
    {
      const img = new Discord.MessageAttachment("https://i.pinimg.com/originals/57/64/5c/57645c7f0ba555682b47ad4ebfecc5a4.jpg");
      message.channel.send(img);
      message.channel.send("**¿QUIERES UNA GALLETA?**");
      contrbot = 0;
    }
  }
}