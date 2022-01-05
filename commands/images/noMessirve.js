const Discord = require('discord.js');

module.exports = 
{
  name: "no",
  aliases: [],
  description: "No tessirve",
  run: async (client, message, args) => 
  {
    if(args[0].toLowerCase() === "messirve")
    {
      const img = new Discord.MessageAttachment("https://media1.tenor.com/images/91f9b09a31099f995977ca5753855447/tenor.gif?itemid=18260260");
      message.channel.send(img);
    }
  }
}