const Discord = require('discord.js');

module.exports = 
{
  name: "que",
  aliases: [],
  description: "Estas muy nervioso xdxd",
  run: async (client, message, args) => 
  {
    if(args[0].toLowerCase() === "nervios")
    {
      const img = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/642481708922306602/837102296638685234/Z.png");
      message.channel.send(img);
    }
  }
}