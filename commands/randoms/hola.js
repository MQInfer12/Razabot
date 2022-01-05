module.exports = 
{
  name: "hola",
  aliases: ["hi", "hello", "wen dia"],
  description: "Te saluda",
  run: async (client, message, args) => 
  {
    var saludos = ["Que pex", "Que onda pinche joto", "No me jodas", "Es noche de fri fayer!, no conozco a nadie", "Hey!", "Llora pues", "Que tranza"];

    var rndsal = Math.floor(Math.random()*(saludos.length));

    message.reply(saludos[rndsal]);
  }
}