const Discord = require('discord.js');

module.exports = 
{
  name: "panan't",
  aliases: [],
  description: "Ya no hay panas",
  run: async (client, message, args) => 
  {
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/848355224468848683/877792266641608714/E6tXucNXsAc-gm8.jpg");
    message.channel.send(img);
  }
}