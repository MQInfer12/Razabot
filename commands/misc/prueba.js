const Discord = require('discord.js');

module.exports = 
{
  name: "prueba",
  aliases: [],
  description: "Para probar comandos",
  run: async (client, message, args) => 
  {
    let embed = new Discord.MessageEmbed()
        .setTitle("Ahuevo")
        .setDescription("Esto es un ahuevo maximo")
        .setFooter("Ahuevo2")

    let msgSended = await message.channel.send(embed);

    let embed2 = new Discord.MessageEmbed()
        .setTitle("Ahuevo")
        .setDescription("Esto es un ahuevo maximo 2")
        .setFooter("Ahuevo2")

     msgSended.edit(embed2);
  }
}