const Discord = require('discord.js');

module.exports = 
{
  name: "nostoi",
  aliases: ["luego"],
  description: "¡Despues jugamos, pana!",
  run: async (client, message, args) => 
  {
    const img = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/642481708922306602/859430992469032970/Screenshot_20210629_095147.jpg");
    message.channel.send(img);
  }
}