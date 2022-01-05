const Discord = require('discord.js');

module.exports = 
{
  name: "a",
  aliases: [],
  description: "Nimodo, tocó exponer",
  run: async (client, message, args) => 
  {
    if(args[0].toLowerCase() === "exponer")
    {
      const exponer = ["https://cdn.discordapp.com/attachments/755955428923277323/855633409162346536/w7bm1fqxb9u51.png", "https://cdn.discordapp.com/attachments/755955428923277323/855633479961411584/maxresdefault.png"];

      var rndexponer = Math.floor(Math.random()*(exponer.length));

      img = exponer[rndexponer];
      message.channel.send(img);
    }
  }
}