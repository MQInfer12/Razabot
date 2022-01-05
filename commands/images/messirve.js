const Discord = require('discord.js');

module.exports = 
{
  name: "messirve",
  aliases: [],
  description: "Tessirve",
  run: async (client, message, args) => 
  {
    const img = new Discord.MessageAttachment("https://media1.tenor.com/images/6a75e77e89a97f30c500386d6d03d276/tenor.gif?itemid=19733506");
    message.channel.send(img);
  }
}