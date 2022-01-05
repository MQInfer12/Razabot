module.exports = 
{
  name: "tula",
  aliases: [],
  description: "Te mide la tulasa",
  run: async (client, message, args) => 
  {
    var rndtula = Math.floor(Math.random()*(301-50))+50;

    if(args[0] == null)
    {
      message.reply("Tienes " + (rndtula / 10) + "cm de tula");
      if(rndtula == 300)
      {
        message.channel.send("¡QUE TULASA CHAVAL!");
      }
    }
    else
    {
      if(!isNaN(args[0]))
      {
        if(args[0] > 30)
        {
          message.reply(" me estas mamando");
        }
        else if(args[0] == 30)
        {
          message.reply(" fua chaval que TULASA!");
        }
        else if(args[0] < 0)
        {
          message.reply(" la tienes hacia adentro gran pvta");
        }
        else if(args[0] == 0)
        {
          message.reply(" ¿no tienes tula acaso?");
        }
        else
        {
          message.reply(" tremenda tu tula de " + args[0] + " cm");
        }
      }
      else
      {
        message.reply(" vaya a mamar a otro lado");
      }
    }
  }
}