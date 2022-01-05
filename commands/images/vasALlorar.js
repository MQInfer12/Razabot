const Discord = require('discord.js');

module.exports = 
{
  name: "vas",
  aliases: [],
  description: "Te hace llorar",
  run: async (client, message, args) => 
  {
    if(args.join(" ").toLowerCase() === "a llorar?")
    {
      const img = new Discord.MessageAttachment("https://cdn.eldeforma.com/wp-content/uploads/2020/09/llora-pues-meme.jpg");
      message.channel.send(img);
    }
  }
}