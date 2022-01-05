module.exports = 
{
  name: "a",
  aliases: [],
  description: "a",
  run: async (client, message, args) => 
  {
    var cadena = "";
    var n = parseInt(args[0]);

    if(n > 2000)
    {
      cadena = "Muchas a";
    }
    else if(n <= 0)
    {
      cadena = "No mames";
    }
    else if(args[0] == null)
    {
      cadena = "a";
    }
    else
    {
      for(var x = 0; x < n; x++)
      {
        cadena += "a";
      }
    }

    message.channel.send(cadena);
  }
}