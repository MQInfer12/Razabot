module.exports = 
{
  name: "cero",
  aliases: ["0"],
  description: "Te la devuelve",
  run: async (client, message, args) => 
  {
    message.channel.send("¡Te reviento el agujero!")
  }
}