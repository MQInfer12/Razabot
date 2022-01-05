const Discord = require('discord.js');

var terjuego = false;

module.exports = 
{
  name: "3er",
  aliases: [],
  description: "Vamos a madrearnos en el tres en raya",
  run: async (client, message, args) => 
  {
    if(terjuego == false)
    {
      var terspaces = [":black_circle:", ":black_circle:", ":black_circle:", ":black_circle:", ":black_circle:", ":black_circle:", ":black_circle:", ":black_circle:", ":black_circle:"];
      cont = 1;
      var color;
      var jugador;
      terjuego = true;
      var estado;
      var ganador;
      var ficha;
      var ultimaJugada = "";

      var player1;
      var player2;

      do{
        jugador = (cont + 1) % 2 + 1;

        estado = "Turno: " + cont + "\t\tJugador: " + jugador;

        if(cont % 2 == 1)
        {
          ficha = "❌";
        }
        else
        {
          ficha = "⭕";
        }

        if(jugador == 1)
        {
          color = '#F83F3F';
        }
        else
        {
          color = '#5D79E9';
        }

        let embed = new Discord.MessageEmbed()
          .setColor(color)
          .setTitle(estado)
          .setDescription(terspaces[0] +"<:vertical_line:927807200221605898>"+ terspaces[1] +"<:vertical_line:927807200221605898>"+ terspaces[2] +"\n"+ 
          "<:horizontal_line:927807163215253544><:cross_line:927807246904205362><:horizontal_line:927807163215253544><:cross_line:927807246904205362><:horizontal_line:927807163215253544>" + "\n" + 
          terspaces[3] +"<:vertical_line:927807200221605898>"+ terspaces[4] +"<:vertical_line:927807200221605898>"+ terspaces[5] + "\n" +
          "<:horizontal_line:927807163215253544><:cross_line:927807246904205362><:horizontal_line:927807163215253544><:cross_line:927807246904205362><:horizontal_line:927807163215253544>" + "\n" + 
          terspaces[6] +"<:vertical_line:927807200221605898>"+ terspaces[7] +"<:vertical_line:927807200221605898>"+ terspaces[8])
          .setFooter(ultimaJugada);

        let msgSended = await message.channel.send(embed);

        if(terspaces[0] === ":black_circle:")
        {
          msgSended.react('↖️');
        }
        if(terspaces[1] === ":black_circle:")
        {
          msgSended.react('⬆️');
        }
        if(terspaces[2] === ":black_circle:")
        {
          msgSended.react('↗️');
        }
        if(terspaces[3] === ":black_circle:")
        {
          msgSended.react('⬅️');
        }
        if(terspaces[4] === ":black_circle:")
        {
          msgSended.react('⏺️');
        }
        if(terspaces[5] === ":black_circle:")
        {
          msgSended.react('➡️');
        }
        if(terspaces[6] === ":black_circle:")
        {
          msgSended.react('↙️');
        }
        if(terspaces[7] === ":black_circle:")
        {
          msgSended.react('⬇️');
        }
        if(terspaces[8] === ":black_circle:")
        {
          msgSended.react('↘️');
        }
        msgSended.react('❌');
        
        const filter = (reaction, user) => {
          ultimaJugada = user.username + " jugó " + reaction.emoji.name + ficha;
          ganador = user.username;
          return['↖️', '⬆️', '↗️', '⬅️', '⏺️', '➡️', '↙️', '⬇️', '↘️', '❌'].includes(reaction.emoji.name) && user.bot == false;
          if(cont == 1)
          {
            player1 = user.username;
          }
          else if(cont == 2)
          {
            player2 = user.username;
          }
        };

        await msgSended.awaitReactions(filter, {max: 1, time: 60000})
        .then(collected => {
          const reaction = collected.first();

          if(cont % 2 == 1)
          {
            if(reaction.emoji.name === '↖️')
            {
              terspaces[0] = ":x:";
            } else if (reaction.emoji.name === '⬆️')
            {
              terspaces[1] = ":x:";
            } else if (reaction.emoji.name === '↗️')
            {
              terspaces[2] = ":x:";
            } else if(reaction.emoji.name === '⬅️')
            {
              terspaces[3] = ":x:";
            } else if (reaction.emoji.name === '⏺️')
            {
              terspaces[4] = ":x:";
            } else if(reaction.emoji.name === '➡️')
            {
              terspaces[5] = ":x:";
            } else if (reaction.emoji.name === '↙️')
            {
              terspaces[6] = ":x:";
            } else if(reaction.emoji.name === '⬇️')
            {
              terspaces[7] = ":x:";
            } else if (reaction.emoji.name === '↘️')
            {
              terspaces[8] = ":x:";
            } else
            {
              terjuego = false;
              color = '#EAEBF0';
              estado = "Fin del juego";
              ultimaJugada = "Empate";
            }
          }
          else
          {
            if(reaction.emoji.name === '↖️')
            {
              terspaces[0] = ":o:";
            } else if(reaction.emoji.name === '⬆️')
            {
              terspaces[1] = ":o:";
            } else if (reaction.emoji.name === '↗️')
            {
              terspaces[2] = ":o:";
            } else if(reaction.emoji.name === '⬅️')
            {
              terspaces[3] = ":o:";
            } else if (reaction.emoji.name === '⏺️')
            {
              terspaces[4] = ":o:";
            } else if(reaction.emoji.name === '➡️')
            {
              terspaces[5] = ":o:";
            } else if (reaction.emoji.name === '↙️')
            {
              terspaces[6] = ":o:";
            } else if(reaction.emoji.name === '⬇️')
            {
              terspaces[7] = ":o:";
            } else if (reaction.emoji.name === '↘️')
            {
              terspaces[8] = ":o:";
            } else 
            {
              terjuego = false;
              color = '#EAEBF0';
              estado = "Fin del juego";
              ultimaJugada = "Empate";
            }
          }
        })
        .catch(collected => {
          terjuego = false;
          color = '#EAEBF0';
          estado = "Se acabó el tiempo";
          ultimaJugada = "Empate";
        });

        cont++;

        if((terspaces[0] === ":x:" && terspaces[1] === ":x:" && terspaces[2] === ":x:") ||
          (terspaces[3] === ":x:" && terspaces[4] === ":x:" && terspaces[5] === ":x:") ||
          (terspaces[6] === ":x:" && terspaces[7] === ":x:" && terspaces[8] === ":x:") ||
          (terspaces[0] === ":x:" && terspaces[3] === ":x:" && terspaces[6] === ":x:") ||
          (terspaces[1] === ":x:" && terspaces[4] === ":x:" && terspaces[7] === ":x:") ||
          (terspaces[2] === ":x:" && terspaces[5] === ":x:" && terspaces[8] === ":x:") ||
          (terspaces[0] === ":x:" && terspaces[4] === ":x:" && terspaces[8] === ":x:") ||
          (terspaces[2] === ":x:" && terspaces[4] === ":x:" && terspaces[6] === ":x:"))
        {
          terjuego = false;
          color = '#EA0F0F';
          estado = "Fin del juego";
          ultimaJugada = "¡Gana " + ganador + "!";
        }
        if((terspaces[0] === ":o:" && terspaces[1] === ":o:" && terspaces[2] === ":o:") ||
          (terspaces[3] === ":o:" && terspaces[4] === ":o:" && terspaces[5] === ":o:") ||
          (terspaces[6] === ":o:" && terspaces[7] === ":o:" && terspaces[8] === ":o:") ||
          (terspaces[0] === ":o:" && terspaces[3] === ":o:" && terspaces[6] === ":o:") ||
          (terspaces[1] === ":o:" && terspaces[4] === ":o:" && terspaces[7] === ":o:") ||
          (terspaces[2] === ":o:" && terspaces[5] === ":o:" && terspaces[8] === ":o:") ||
          (terspaces[0] === ":o:" && terspaces[4] === ":o:" && terspaces[8] === ":o:") ||
          (terspaces[2] === ":o:" && terspaces[4] === ":o:" && terspaces[6] === ":o:"))
        {
          terjuego = false;
          color = '#0F3AEA';
          estado = "Fin del juego";
          ultimaJugada = "¡Gana " + ganador + "!";
        }

        if(cont === 10)
        {
          terjuego = false;
          color = '#EAEBF0';
          estado = "Fin del juego";
          ultimaJugada = "Empate";
        }

        msgSended.delete();
      }while(terjuego == true);
    
      let embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle(estado)
        .setDescription(terspaces[0] +"<:vertical_line:927807200221605898>"+ terspaces[1] +"<:vertical_line:927807200221605898>"+ terspaces[2] +"\n"+ 
          "<:horizontal_line:927807163215253544><:cross_line:927807246904205362><:horizontal_line:927807163215253544><:cross_line:927807246904205362><:horizontal_line:927807163215253544>" + "\n" + 
          terspaces[3] +"<:vertical_line:927807200221605898>"+ terspaces[4] +"<:vertical_line:927807200221605898>"+ terspaces[5] + "\n" +
          "<:horizontal_line:927807163215253544><:cross_line:927807246904205362><:horizontal_line:927807163215253544><:cross_line:927807246904205362><:horizontal_line:927807163215253544>" + "\n" + 
          terspaces[6] +"<:vertical_line:927807200221605898>"+ terspaces[7] +"<:vertical_line:927807200221605898>"+ terspaces[8]) 
        .setFooter(ultimaJugada);

      let msgSended = await message.channel.send(embed);
    }
  }
}