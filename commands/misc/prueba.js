const Discord = require('discord.js');

module.exports = 
{
  name: "prueba",
  aliases: [],
  description: "Para probar comandos",
  run: async (client, message, args) => 
  {
    message.channel.send("<@468164977593679886>");    
  }
}