const Discord = require('discord.js');

var terjuego = false;

module.exports = 
{
  name: "4er",
  aliases: [],
  description: "Vamos a madrearnos en el cuatro en raya",
  run: async (client, message, args) => 
  {
    function dibujarTurno(color, estado, tablero, ultimaJugada) 
    {
      let descripcion = "<:vertical_line:927807200221605898>1️⃣<:vertical_line:927807200221605898>2️⃣<:vertical_line:927807200221605898>3️⃣<:vertical_line:927807200221605898>4️⃣<:vertical_line:927807200221605898>5️⃣<:vertical_line:927807200221605898>6️⃣<:vertical_line:927807200221605898>7️⃣<:vertical_line:927807200221605898>\n<:crossright_line:929494921482756158><:horizontal_line:927807163215253544><:cross_line:927807246904205362><:horizontal_line:927807163215253544><:cross_line:927807246904205362><:horizontal_line:927807163215253544><:cross_line:927807246904205362><:horizontal_line:927807163215253544><:cross_line:927807246904205362><:horizontal_line:927807163215253544><:cross_line:927807246904205362><:horizontal_line:927807163215253544><:cross_line:927807246904205362><:horizontal_line:927807163215253544><:crossleft_line:929495088424443925>\n";

      for(let x = 0; x < 6; x++)
      {
        for(let y = 0; y < 7; y++)
        {
          descripcion += "<:vertical_line:927807200221605898>" + tablero[x][y];
        }
        descripcion += "<:vertical_line:927807200221605898>\n";
      }

      let embed = new Discord.MessageEmbed()
          .setColor(color)
          .setTitle(estado)
          .setDescription(descripcion)
          .setFooter(ultimaJugada);
      return embed;
    }

    function colocarFicha(columna, tablero, ficha, reaction)
    {
      if(tablero[0][columna] != '⚫')
      {
        ultimaJugada = "La columna " + (columna + 1) + " esta llena";
      }
      else
      {
        for(let x = 5; x >= 0; x--)
        {
          if(tablero[x][columna] == '⚫')
          {
            tablero[x][columna] = ficha;
            cont++;
            break;
          }
        }
      }
    }

    function victoria(tablero)
    {
      for(x = 0; x < 3; x++)
      {
        for(y = 0; y < 4; y++)
        {
          if(tablero[x][y] != '⚫' && tablero[x][y] == tablero[x+1][y+1] && tablero[x][y] == tablero[x+2][y+2] && tablero[x][y] == tablero[x+3][y+3])
          {
            return true;
          }
        }
      }

      for(x = 0; x < 3; x++)
      {
        for(y = 3; y < 7; y++)
        {
          if(tablero[x][y] != '⚫' && tablero[x][y] == tablero[x+1][y-1] && tablero[x][y] == tablero[x+2][y-2] && tablero[x][y] == tablero[x+3][y-3])
          {
            return true;
          }
        }
      }

      for(x = 0; x < 6; x++)
      {
        for(y = 0; y < 4; y++)
        {
          if(tablero[x][y] != '⚫' && tablero[x][y] == tablero[x][y+1] && tablero[x][y] == tablero[x][y+2] && tablero[x][y] == tablero[x][y+3])
          {
            return true;
          }
        }
      }

      for(x = 0; x < 3; x++)
      {
        for(y = 0; y < 7; y++)
        {
          if(tablero[x][y] != '⚫' && tablero[x][y] == tablero[x+1][y] && tablero[x][y] == tablero[x+2][y] && tablero[x][y] == tablero[x+3][y])
          {
            return true;
          }
        }
      }
    }

    //Codigo principal del juego

    if(terjuego == false)
    {
      var tablero = new Array(6);

      for (var i = 0; i < tablero.length; i++) 
      {
        tablero[i] = new Array(7);
        tablero[i].fill('⚫');
      }

      terjuego = true;
      cont = 1;
      let color = '#F83F3F';
      let jugador = (cont + 1) % 2 + 1;
      let estado = "Turno: " + cont + "\t\tJugador: " + jugador;
      let ganador;
      let ficha;
      var ultimaJugada = "";
      let usuario;

      let jugador1;
      let jugador2;

      let embed = dibujarTurno(color, estado, tablero, ultimaJugada);
      
      var msgSended = await message.channel.send(embed);

      msgSended.react('1️⃣').then(() =>
      msgSended.react('2️⃣')).then(() =>
      msgSended.react('3️⃣')).then(() =>
      msgSended.react('4️⃣')).then(() =>
      msgSended.react('5️⃣')).then(() =>
      msgSended.react('6️⃣')).then(() =>
      msgSended.react('7️⃣')).then(() =>
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
          ficha = "🔵";
        }
        else
        {
          ficha = "🔴";
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

          return['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '❌'].includes(reaction.emoji.name) && user.bot == false;
        };

        await msgSended.awaitReactions(filter, {max: 1, time: 120000})
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

            if(reaction.emoji.name === '1️⃣')
            {
              colocarFicha(0, tablero, ficha, reaction);
            } else if (reaction.emoji.name === '2️⃣')
            {
              colocarFicha(1, tablero, ficha, reaction); 
            } else if (reaction.emoji.name === '3️⃣')
            {
              colocarFicha(2, tablero, ficha, reaction); 
            } else if(reaction.emoji.name === '4️⃣')
            {
              colocarFicha(3, tablero, ficha, reaction); 
            } else if (reaction.emoji.name === '5️⃣')
            {
              colocarFicha(4, tablero, ficha, reaction); 
            } else if(reaction.emoji.name === '6️⃣')
            {
              colocarFicha(5, tablero, ficha, reaction); 
            } else if (reaction.emoji.name === '7️⃣')
            {
              colocarFicha(6, tablero, ficha, reaction); 
            }
          }
          else if(cont % 2 == 0 && usuario.id == jugador2.id)
          {
            ultimaJugada = usuario.username + " jugó " + reaction.emoji.name + ficha;

            if(reaction.emoji.name === '1️⃣')
            {
              colocarFicha(0, tablero, ficha, reaction);
            } else if(reaction.emoji.name === '2️⃣')
            {
              colocarFicha(1, tablero, ficha, reaction); 
            } else if (reaction.emoji.name === '3️⃣')
            {
              colocarFicha(2, tablero, ficha, reaction); 
            } else if(reaction.emoji.name === '4️⃣')
            {
              colocarFicha(3, tablero, ficha, reaction); 
            } else if (reaction.emoji.name === '5️⃣')
            {
              colocarFicha(4, tablero, ficha, reaction); 
            } else if(reaction.emoji.name === '6️⃣')
            {
              colocarFicha(5, tablero, ficha, reaction); 
            } else if (reaction.emoji.name === '7️⃣')
            {
              colocarFicha(6, tablero, ficha, reaction); 
            } 
          }

          msgSended.reactions.resolve(reaction.emoji.name).users.remove(usuario.id);
        })
        .catch(() => {
          terjuego = false;
          color = '#EAEBF0';
          estado = "Se acabó el tiempo";
          ultimaJugada = "Empate";
        });

        if(cont % 2 == 1 && victoria(tablero))
        {
          terjuego = false;
          color = '#EA0F0F';
          estado = "Fin del juego";
          ultimaJugada = "¡Gana " + ganador + "!";
          break;
        }
        if(cont % 2 == 0 && victoria(tablero))
        {
          terjuego = false;
          color = '#0F3AEA';
          estado = "Fin del juego";
          ultimaJugada = "¡Gana " + ganador + "!";
          break;
        }

        if(cont === 43)
        {
          terjuego = false;
          color = '#EAEBF0';
          estado = "Fin del juego";
          ultimaJugada = "Empate";
        }

      }while(terjuego == true);

      msgSended.reactions.removeAll()
      let embedFinal = dibujarTurno(color, estado, tablero, ultimaJugada);

      msgSended.edit(embedFinal);
    }
  }
}