const Discord = require('discord.js');

var terjuego = false;

module.exports = 
{
  name: "3er",
  aliases: [],
  description: "Vamos a madrearnos en el tres en raya",
  run: async (client, message, args) => 
  {
    function dibujarTurno(color, estado, tablero, ultimaJugada) 
    {
      let embed = new Discord.MessageEmbed()
          .setColor(color)
          .setTitle(estado)
          .setDescription(tablero[0] +"<:vertical_line:927807200221605898>"+ tablero[1] +"<:vertical_line:927807200221605898>"+ tablero[2] +"\n"+ 
          "<:horizontal_line:927807163215253544><:cross_line:927807246904205362><:horizontal_line:927807163215253544><:cross_line:927807246904205362><:horizontal_line:927807163215253544>" + "\n" + 
          tablero[3] +"<:vertical_line:927807200221605898>"+ tablero[4] +"<:vertical_line:927807200221605898>"+ tablero[5] + "\n" +
          "<:horizontal_line:927807163215253544><:cross_line:927807246904205362><:horizontal_line:927807163215253544><:cross_line:927807246904205362><:horizontal_line:927807163215253544>" + "\n" + 
          tablero[6] +"<:vertical_line:927807200221605898>"+ tablero[7] +"<:vertical_line:927807200221605898>"+ tablero[8])
          .setFooter(ultimaJugada);
      return embed;
    }

    if(terjuego == false)
    {
      var terspaces = new Array(9);
      terspaces.fill(':black_circle:');
      terjuego = true;
      cont = 1;
      var color = '#F83F3F';
      var jugador = (cont + 1) % 2 + 1;
      var estado = "Turno: " + cont + "\t\tJugador: " + jugador;
      var ganador;
      var ficha;
      var ultimaJugada = "";
      var usuario;

      var jugador1;
      var jugador2;

      let embed = dibujarTurno(color, estado, terspaces, ultimaJugada);
      
      let msgSended = await message.channel.send(embed);

      msgSended.react('↖️').then(() =>
      msgSended.react('⬆️')).then(() =>
      msgSended.react('↗️')).then(() =>
      msgSended.react('⬅️')).then(() =>
      msgSended.react('⏺️')).then(() =>
      msgSended.react('➡️')).then(() =>
      msgSended.react('↙️')).then(() =>
      msgSended.react('⬇️')).then(() =>
      msgSended.react('↘️')).then(() =>
      msgSended.react('❌'))

      do{
        if(cont < 3)
        {
          jugador = (cont + 1) % 2 + 1;
        }
        else if(cont % 2 == 1)
        {
          jugador = jugador1.username;
        }
        else
        {
          jugador = jugador2.username;
        }

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

        if(cont != 1)
        {
          let embed2 = dibujarTurno(color, estado, terspaces, ultimaJugada);

          await msgSended.edit(embed2);
        }
        
        const filter = (reaction, user) => {
          ganador = user.username;
          usuario = user;

          if(cont == 1 && !user.bot)
          {
            jugador1 = user;
          }
          else if(cont == 2 && !user.bot)
          {
            jugador2 = user;
          }

          return['↖️', '⬆️', '↗️', '⬅️', '⏺️', '➡️', '↙️', '⬇️', '↘️', '❌'].includes(reaction.emoji.name) && user.bot == false;
        };

        await msgSended.awaitReactions(filter, {max: 1, time: 60000})
        .then(collected => {
          const reaction = collected.first();

          if (reaction.emoji.name === '❌')
          {
            terjuego = false;
            color = '#EAEBF0';
            estado = "Fin del juego";
            ultimaJugada = "Empate";
          }
          else if(cont % 2 == 1 && usuario.id == jugador1.id)
          {
            ultimaJugada = usuario.username + " jugó " + reaction.emoji.name + ficha;

            if(reaction.emoji.name === '↖️' && terspaces[0] == ":black_circle:")
            {
              terspaces[0] = ":x:";
              msgSended.reactions.cache.get('↖️').remove();
              cont++; 
            } else if (reaction.emoji.name === '⬆️' && terspaces[1] == ":black_circle:")
            {
              terspaces[1] = ":x:";
              msgSended.reactions.cache.get('⬆️').remove();
              cont++; 
            } else if (reaction.emoji.name === '↗️' && terspaces[2] == ":black_circle:")
            {
              terspaces[2] = ":x:";
              msgSended.reactions.cache.get('↗️').remove();
              cont++; 
            } else if(reaction.emoji.name === '⬅️' && terspaces[3] == ":black_circle:")
            {
              terspaces[3] = ":x:";
              msgSended.reactions.cache.get('⬅️').remove();
              cont++; 
            } else if (reaction.emoji.name === '⏺️' && terspaces[4] == ":black_circle:")
            {
              terspaces[4] = ":x:";
              msgSended.reactions.cache.get('⏺️').remove();
              cont++; 
            } else if(reaction.emoji.name === '➡️' && terspaces[5] == ":black_circle:")
            {
              terspaces[5] = ":x:";
              msgSended.reactions.cache.get('➡️').remove();
              cont++; 
            } else if (reaction.emoji.name === '↙️' && terspaces[6] == ":black_circle:")
            {
              terspaces[6] = ":x:";
              msgSended.reactions.cache.get('↙️').remove();
              cont++; 
            } else if(reaction.emoji.name === '⬇️' && terspaces[7] == ":black_circle:")
            {
              terspaces[7] = ":x:";
              msgSended.reactions.cache.get('⬇️').remove();
              cont++; 
            } else if (reaction.emoji.name === '↘️' && terspaces[8] == ":black_circle:")
            {
              terspaces[8] = ":x:";
              msgSended.reactions.cache.get('↘️').remove();
              cont++; 
            } else if (reaction.emoji.name === '❌')
            {
              terjuego = false;
              color = '#EAEBF0';
              estado = "Fin del juego";
              ultimaJugada = "Empate";
            }
          }
          else if(cont % 2 == 0 && usuario.id == jugador2.id)
          {
            ultimaJugada = usuario.username + " jugó " + reaction.emoji.name + ficha;

            if(reaction.emoji.name === '↖️' && terspaces[0] == ":black_circle:")
            {
              terspaces[0] = ":o:";
              msgSended.reactions.cache.get('↖️').remove();
              cont++; 
            } else if(reaction.emoji.name === '⬆️' && terspaces[1] == ":black_circle:")
            {
              terspaces[1] = ":o:";
              msgSended.reactions.cache.get('⬆️').remove();
              cont++; 
            } else if (reaction.emoji.name === '↗️' && terspaces[2] == ":black_circle:")
            {
              terspaces[2] = ":o:";
              msgSended.reactions.cache.get('↗️').remove();
              cont++; 
            } else if(reaction.emoji.name === '⬅️' && terspaces[3] == ":black_circle:")
            {
              terspaces[3] = ":o:";
              msgSended.reactions.cache.get('⬅️').remove();
              cont++; 
            } else if (reaction.emoji.name === '⏺️' && terspaces[4] == ":black_circle:")
            {
              terspaces[4] = ":o:";
              msgSended.reactions.cache.get('⏺️').remove();
              cont++; 
            } else if(reaction.emoji.name === '➡️' && terspaces[5] == ":black_circle:")
            {
              terspaces[5] = ":o:";
              msgSended.reactions.cache.get('➡️').remove();
              cont++; 
            } else if (reaction.emoji.name === '↙️' && terspaces[6] == ":black_circle:")
            {
              terspaces[6] = ":o:";
              msgSended.reactions.cache.get('↙️').remove();
              cont++; 
            } else if(reaction.emoji.name === '⬇️' && terspaces[7] == ":black_circle:")
            {
              terspaces[7] = ":o:";
              msgSended.reactions.cache.get('⬇️').remove();
              cont++; 
            } else if (reaction.emoji.name === '↘️' && terspaces[8] == ":black_circle:")
            {
              terspaces[8] = ":o:";
              msgSended.reactions.cache.get('↘️').remove();
              cont++; 
            } 
          }
          else
          {
            msgSended.reactions.resolve(reaction.emoji.name).users.remove(usuario.id);
          }
        })
        .catch(collected => {
          terjuego = false;
          color = '#EAEBF0';
          estado = "Se acabó el tiempo";
          ultimaJugada = "Empate";
        });

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
          break;
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
          break;
        }

        if(cont === 10)
        {
          terjuego = false;
          color = '#EAEBF0';
          estado = "Fin del juego";
          ultimaJugada = "Empate";
        }

      }while(terjuego == true);

      msgSended.reactions.removeAll()
      let embedFinal = dibujarTurno(color, estado, terspaces, ultimaJugada);

      msgSended.edit(embedFinal);
    }
  }
}