const Discord = require('discord.js');

module.exports = 
{
  name: "what",
  aliases: [],
  description: "Que chuchas acabas de decir",
  run: async (client, message, args) => 
  {
    const img = new Discord.MessageAttachment("https://media1.tenor.com/images/8f7a28e62f8242b264c8a39ba8bea261/tenor.gif?itemid=15922897");
    message.channel.send(img);
  }
}