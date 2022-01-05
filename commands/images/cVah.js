const Discord = require('discord.js');

module.exports = 
{
  name: "c",
  aliases: [],
  description: "te vas",
  run: async (client, message, args) => 
  {
    if(args[0].toLowerCase() === "vah")
    {
      const img = new Discord.MessageAttachment("http://pa1.narvii.com/6430/89e71cb35411ee9cc0fef0bd60ae50ffd4bd6666_00.gif");
      message.channel.send(img);
    }
  }
}