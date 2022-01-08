module.exports = 
{
  name: "amenaza",
  aliases: [],
  description: "Te amenaza",
  run: async (client, message, args) => 
  {
    var amenazas = ["No te metas conmigo gran pvta."];

    var rndam = Math.floor(Math.random()*(amenazas.length));

    message.author.send(amenazas[rndam]);
  }
}