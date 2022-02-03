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
      let tablero = new Array(9);
      tablero.fill(':black_circle:');
      terjuego = true;
      cont = 1;
      let color = '#F83F3F';
      let jugador = (cont + 1) % 2 + 1;
      let estado = "Turno: " + cont + "\t\tJugador: " + jugador;
      let ganador;
      let ficha;
      let ultimaJugada = "";
      let usuario;

      let jugador1;
      let jugador2;

      let embed = dibujarTurno(color, estado, tablero, ultimaJugada);
      
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
          let embed2 = dibujarTurno(color, estado, tablero, ultimaJugada);

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

            if(reaction.emoji.name === '↖️' && tablero[0] == ":black_circle:")
            {
              tablero[0] = ":x:";
              msgSended.reactions.cache.get('↖️').remove();
              cont++; 
            } else if (reaction.emoji.name === '⬆️' && tablero[1] == ":black_circle:")
            {
              tablero[1] = ":x:";
              msgSended.reactions.cache.get('⬆️').remove();
              cont++; 
            } else if (reaction.emoji.name === '↗️' && tablero[2] == ":black_circle:")
            {
              tablero[2] = ":x:";
              msgSended.reactions.cache.get('↗️').remove();
              cont++; 
            } else if(reaction.emoji.name === '⬅️' && tablero[3] == ":black_circle:")
            {
              tablero[3] = ":x:";
              msgSended.reactions.cache.get('⬅️').remove();
              cont++; 
            } else if (reaction.emoji.name === '⏺️' && tablero[4] == ":black_circle:")
            {
              tablero[4] = ":x:";
              msgSended.reactions.cache.get('⏺️').remove();
              cont++; 
            } else if(reaction.emoji.name === '➡️' && tablero[5] == ":black_circle:")
            {
              tablero[5] = ":x:";
              msgSended.reactions.cache.get('➡️').remove();
              cont++; 
            } else if (reaction.emoji.name === '↙️' && tablero[6] == ":black_circle:")
            {
              tablero[6] = ":x:";
              msgSended.reactions.cache.get('↙️').remove();
              cont++; 
            } else if(reaction.emoji.name === '⬇️' && tablero[7] == ":black_circle:")
            {
              tablero[7] = ":x:";
              msgSended.reactions.cache.get('⬇️').remove();
              cont++; 
            } else if (reaction.emoji.name === '↘️' && tablero[8] == ":black_circle:")
            {
              tablero[8] = ":x:";
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

            if(reaction.emoji.name === '↖️' && tablero[0] == ":black_circle:")
            {
              tablero[0] = ":o:";
              msgSended.reactions.cache.get('↖️').remove();
              cont++; 
            } else if(reaction.emoji.name === '⬆️' && tablero[1] == ":black_circle:")
            {
              tablero[1] = ":o:";
              msgSended.reactions.cache.get('⬆️').remove();
              cont++; 
            } else if (reaction.emoji.name === '↗️' && tablero[2] == ":black_circle:")
            {
              tablero[2] = ":o:";
              msgSended.reactions.cache.get('↗️').remove();
              cont++; 
            } else if(reaction.emoji.name === '⬅️' && tablero[3] == ":black_circle:")
            {
              tablero[3] = ":o:";
              msgSended.reactions.cache.get('⬅️').remove();
              cont++; 
            } else if (reaction.emoji.name === '⏺️' && tablero[4] == ":black_circle:")
            {
              tablero[4] = ":o:";
              msgSended.reactions.cache.get('⏺️').remove();
              cont++; 
            } else if(reaction.emoji.name === '➡️' && tablero[5] == ":black_circle:")
            {
              tablero[5] = ":o:";
              msgSended.reactions.cache.get('➡️').remove();
              cont++; 
            } else if (reaction.emoji.name === '↙️' && tablero[6] == ":black_circle:")
            {
              tablero[6] = ":o:";
              msgSended.reactions.cache.get('↙️').remove();
              cont++; 
            } else if(reaction.emoji.name === '⬇️' && tablero[7] == ":black_circle:")
            {
              tablero[7] = ":o:";
              msgSended.reactions.cache.get('⬇️').remove();
              cont++; 
            } else if (reaction.emoji.name === '↘️' && tablero[8] == ":black_circle:")
            {
              tablero[8] = ":o:";
              msgSended.reactions.cache.get('↘️').remove();
              cont++; 
            } 
          }
          else
          {
            msgSended.reactions.resolve(reaction.emoji.name).users.remove(usuario.id);
          }
        })
        .catch(() => {
          terjuego = false;
          color = '#EAEBF0';
          estado = "Se acabó el tiempo";
          ultimaJugada = "Empate";
        });

        if((tablero[0] === ":x:" && tablero[1] === ":x:" && tablero[2] === ":x:") ||
          (tablero[3] === ":x:" && tablero[4] === ":x:" && tablero[5] === ":x:") ||
          (tablero[6] === ":x:" && tablero[7] === ":x:" && tablero[8] === ":x:") ||
          (tablero[0] === ":x:" && tablero[3] === ":x:" && tablero[6] === ":x:") ||
          (tablero[1] === ":x:" && tablero[4] === ":x:" && tablero[7] === ":x:") ||
          (tablero[2] === ":x:" && tablero[5] === ":x:" && tablero[8] === ":x:") ||
          (tablero[0] === ":x:" && tablero[4] === ":x:" && tablero[8] === ":x:") ||
          (tablero[2] === ":x:" && tablero[4] === ":x:" && tablero[6] === ":x:"))
        {
          terjuego = false;
          color = '#EA0F0F';
          estado = "Fin del juego";
          ultimaJugada = "¡Gana " + ganador + "!";
          break;
        }
        if((tablero[0] === ":o:" && tablero[1] === ":o:" && tablero[2] === ":o:") ||
          (tablero[3] === ":o:" && tablero[4] === ":o:" && tablero[5] === ":o:") ||
          (tablero[6] === ":o:" && tablero[7] === ":o:" && tablero[8] === ":o:") ||
          (tablero[0] === ":o:" && tablero[3] === ":o:" && tablero[6] === ":o:") ||
          (tablero[1] === ":o:" && tablero[4] === ":o:" && tablero[7] === ":o:") ||
          (tablero[2] === ":o:" && tablero[5] === ":o:" && tablero[8] === ":o:") ||
          (tablero[0] === ":o:" && tablero[4] === ":o:" && tablero[8] === ":o:") ||
          (tablero[2] === ":o:" && tablero[4] === ":o:" && tablero[6] === ":o:"))
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

      msgSended.reactions.removeAll();
      let embedFinal = dibujarTurno(color, estado, tablero, ultimaJugada);

      msgSended.edit(embedFinal);
    }
  }
}