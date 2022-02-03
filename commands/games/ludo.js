const Discord = require('discord.js');

module.exports = 
{
  name: "ludo",
  aliases: [],
  description: "Ludo para la family",
  run: async (client, message, args) => 
  {
    //Variables de emojis

    var green_space = "<:g:930139686519861288>";
    var red_space = "<:r:930139686213660733>";
    var yellow_space = "<:y:930139686448554024>";
    var blue_space = "<:b:930139686108799027>";
    var green_arrow = "<:g:938666147958636584>";
    var red_arrow = "<:r:938666147908288552>";
    var yellow_arrow = "<:y:938666147958648873>";
    var blue_arrow = "<:b:938666147912499210>";
    var white_road = "<:w:930139686029099070>";
    var green_road = "<:g:930139686297534564>";
    var red_road = "<:r:930139686339481630>";
    var yellow_road = "<:y:930139686318522438>";
    var blue_road = "<:b:930139686310142052>";
    var green_star = "<:g:930139686305935400>";
    var red_star = "<:r:930139686389837825>";
    var yellow_star = "<:y:930139686419177552>";
    var blue_star = "<:b:930139686431752242>";
    var down_left = "<:c:930260825829158913>";
    var top_right = "<:c:930260825875304488>";
    var top_left = "<:c:930260825854332959>";
    var down_right = "<:c:930260825820774471>";
    var center = "<:c:930260825757847572>";
    var bases = [new Token("<:g:936781786942435429>", [-2, -2]), new Token("<:b:936781786879524884>", [-2, -2]), new Token("<:r:936781786975969370>", [-2, -2]), new Token("<:y:936781786975989812>", [-2, -2])];
    
    //Variables del juego

    let terminar = false;
    var ganador = "";
    var boolGanador = false;
    let turno = 1;
    let usuario;
    var dice = 0;
    var nameJugador = ["Jugador 1", "Jugador 2", "Jugador 3", "Jugador 4"];
    let modulo;
    var jugador = new Array(4);
    let color = "#11ff00";
    var colorHistorial;
    let mostrarTurno = "Turno: " + turno;
    let mostrarJugador = green_road + " " + nameJugador[0];
    var historial = new Array(6).fill("");
    historial[0] = "¡Empieza el juego!\n";
    var mostrarHistorial = false;
    var advice = "";

    //matriz de emojis y posicion de las fichas

    var tokens = [[new Token("<:g:930280645077381170>"), new Token("<:g:930280645131919391>"), new Token("<:g:930280645102534686>"), new Token("<:g:930280645081571338>")],
                  [new Token("<:b:930280645312253992>"), new Token("<:b:930280645131894834>"), new Token("<:b:930280644951572490>"), new Token("<:b:930280644972527616>")],
                  [new Token("<:r:930280644775407658>"), new Token("<:r:930280644972515379>"), new Token("<:r:930280645182226463>"), new Token("<:r:930280645152870400>")],
                  [new Token("<:y:930280645169664020>"), new Token("<:y:930280647430397972>"), new Token("<:y:930280645245157377>"), new Token("<:y:930280645060591676>")]];

    //Dibujar el mensaje inicial

    embed = dibujarTurno(mostrarTurno, mostrarJugador, color, dice);
    var msgLudo = await message.channel.send(embed);
    
    //Reaccionar con los controles

    msgLudo.react('🎲').then(() =>
    msgLudo.react('🇦')).then(() =>
    msgLudo.react('🇧')).then(() =>
    msgLudo.react('🇨')).then(() =>
    msgLudo.react('🇩')).then(() =>
    msgLudo.react('📖'));

    do
    {
      //Color y jugador de cada turno
    
      switch((turno - 1) % 4)
      {
        case 0:
          color = "#11ff00";
          colorHistorial = green_road;
          mostrarJugador = green_road + " " + nameJugador[0];
          break;
        case 1:
          color = "#0033ff";
          colorHistorial = blue_road;
          mostrarJugador = blue_road + " " + nameJugador[1];
          break;
        case 2:
          color = "#ff0000";
          colorHistorial = red_road;
          mostrarJugador = red_road + " " + nameJugador[2];
          break;
        case 3:
          color = "#ffff00";
          colorHistorial = yellow_road;
          mostrarJugador = yellow_road + " " + nameJugador[3];
          break;
      }

      //Editar el mensaje cada turno

      mostrarTurno = "Turno: " + turno;
      let embed2 = dibujarTurno(mostrarTurno, mostrarJugador, color, dice);
      await msgLudo.edit(embed2);

      //Obtener la reacción del jugador

      var jugadorObtenido = new Array(4).fill(false);

      const filter = (reaction, user) => 
      {
        usuario = user;
        if(turno < 5 && !user.bot)
        {
          switch((turno - 1) % 4)
          {
            case 0:
              llenarJugador(user, 0);
              break;
            case 1:
              llenarJugador(user, 1);
              break;
            case 2:
              llenarJugador(user, 2);
              break;
            case 3:
              llenarJugador(user, 3);
              break;
          }
        }

        return['🎲', '🇦', '🇧', '🇨', '🇩', '📖'].includes(reaction.emoji.name) && user.bot == false;
      };

      modulo = (turno - 1) % 4;

      await msgLudo.awaitReactions(filter, {max: 1, time: 3600000})
        .then(collected => {
          const reaction = collected.first();

          for(x = 0; x < 4; x++)
          {
            if(modulo == x && usuario.id == jugador[modulo].id)
            {
              switch(reaction.emoji.name)
              {
                case '🎲':
                  if(dice == 0)
                  {
                    dice = Math.floor(Math.random() * (7 - 1) + 1);
                    llenarHistorial("A "+ nameJugador[modulo] + " le salió 🎲 " + dice);
                    if(!comprobarMovs(modulo))
                    {
                      llenarHistorial("No hubo movimientos posibles para " + nameJugador[modulo]);
                      dice = 0;
                      turno++;
                    }
                    advice = "";
                  }
                  else
                  {
                    advice = "Ya se lanzó el dado";
                  }
                  break;
                case '🇦':
                  if(dice == 0)
                  {
                    advice = "Aún no se lanzó el dado";
                  }
                  else
                  {
                    moverToken(modulo, 0);
                  }
                  break;
                case '🇧':
                  if(dice == 0)
                  {
                    advice = "Aún no se lanzó el dado";
                  }
                  else
                  {
                    moverToken(modulo, 1);
                  }
                  break;
                case '🇨':
                  if(dice == 0)
                  {
                    advice = "Aún no se lanzó el dado";
                  }
                  else
                  {
                    moverToken(modulo, 2);
                  }
                  break;
                case '🇩':
                  if(dice == 0)
                  {
                    advice = "Aún no se lanzó el dado";
                  }
                  else
                  {
                    moverToken(modulo, 3);
                  }
                  break;
                case '📖':
                  if(mostrarHistorial) mostrarHistorial = false;
                  else if(!mostrarHistorial) mostrarHistorial = true;
                  break;
              }
            }
          }

          msgLudo.reactions.resolve(reaction.emoji.name).users.remove(usuario.id);
        })
        .catch(() => {
          terminar = true;
        });
        
    } while(terminar === false);

    msgLudo.reactions.removeAll();

    //FUNCIONES Y OBJETOS

    //Objeto Token

    function Token(emoji, pos = -1, inBase = false, finished = false)
    {
      this.emoji = emoji;
      this.pos = pos;
      this.inBase = inBase;
      this.finished = finished;
    }

    //El embed que se dibujará cada turno

    function dibujarTurno(mostrarTurno, mostrarJugador, color, dice)
    {
      //Espacios en blanco del tablero

      let start = new Array(4);
      for(x = 0; x < start.length; x++)
      {
        start[x] = new Array(4);
      }

      let spaces = new Array(44);
      spaces.fill(white_road);

      //Colocar las flechas en el camino

      spaces[9] = blue_arrow;
      spaces[20] = red_arrow;
      spaces[31] = yellow_arrow;
      spaces[42] = green_arrow;

      //Caminos hacia las bases

      var roads = [[green_road, green_road, green_road, green_road, green_space],
                   [blue_road, blue_road, blue_road, blue_road, blue_space],
                   [red_road, red_road, red_road, red_road, red_space],
                   [yellow_road, yellow_road, yellow_road, yellow_road, yellow_space]];

      //LLenar la posicion de las fichas en el tablero

      for(x = 0; x < 4; x++)
      {
        for(y = 0; y < 4; y++)
        {
          if(tokens[x][y].pos === -1)
          {
            start[x][y] = tokens[x][y].emoji;
          }
          else
          {
            start[x][y] = white_road;
            spaces[tokens[x][y].pos] = tokens[x][y].emoji;
          }
        }
      }

      //Llenar la posicion de las fichas en los caminos de colores

      for(x = 0; x < 4; x++)
      {
        for(y = 0; y < 4; y++)
        {
          if(tokens[x][y].inBase)
          {
            roads[x][tokens[x][y].pos - 100] = tokens[x][y].emoji;
          }
        }
      }

      //Dibujar las bases

      for(x = 0; x < 4; x++)
      {
        for(y = 0; y < 2; y++)
        {
          if(bases[x].pos[y] != -2)
          {
            if(bases[x].pos[y] > 99)
            {
              roads[x][bases[x].pos[y] - 100] = bases[x].emoji;
            }
            else
            {
              spaces[bases[x].pos[y]] = bases[x].emoji;
            }
          }
        }
      }

      //Dibujar las estrellas

      spaces[0] = green_star;
      spaces[11] = blue_star;
      spaces[22] = red_star;
      spaces[33] = yellow_star;

      //Field dado

      let fieldDice;

      if(dice == 0)
      {
        fieldDice = "???";
      }
      else
      {
        fieldDice = "🎲 " + dice;
      }

      //Contar fichas en el final

      let contFinal = new Array(4).fill(0);

      if(!boolGanador)
      {
        for(x = 0; x < 4; x++)
        {
          for(y = 0; y < 4; y++)
          {
            if(tokens[x][y].finished)
            {
              contFinal[x]++;
            }
          }

          if(contFinal[x] == 4)
          {
            boolGanador = true;
            ganador = nameJugador[x];
          }
        }
      }

      //Iniciar el dibujado

      let descripcion =
      green_space+green_space+green_space+green_space+green_space+spaces[8]+spaces[9]+spaces[10]+blue_space+blue_space+blue_space+blue_space+blue_space+"\n"+
      green_space+start[0][0]+white_road+start[0][1]+green_space+spaces[7]+roads[1][0]+spaces[11]+blue_space+start[1][0]+white_road+start[1][1]+blue_space+"\n"+
      green_space+white_road+green_space+white_road+green_space+spaces[6]+roads[1][1]+spaces[12]+blue_space+white_road+blue_space+white_road+blue_space+"\n"+
      green_space+start[0][2]+white_road+start[0][3]+green_space+spaces[5]+roads[1][2]+spaces[13]+blue_space+start[1][2]+white_road+start[1][3]+blue_space+"\n"+
      green_space+green_space+green_space+green_space+green_space+spaces[4]+roads[1][3]+spaces[14]+blue_space+blue_space+blue_space+blue_space+blue_space+"\n"+
      spaces[43]+spaces[0]+spaces[1]+spaces[2]+spaces[3]+top_left+roads[1][4]+top_right+spaces[15]+spaces[16]+spaces[17]+spaces[18]+spaces[19]+"\n"+
      spaces[42]+roads[0][0]+roads[0][1]+roads[0][2]+roads[0][3]+roads[0][4]+center+roads[2][4]+roads[2][3]+roads[2][2]+roads[2][1]+roads[2][0]+spaces[20]+"\n"+
      spaces[41]+spaces[40]+spaces[39]+spaces[38]+spaces[37]+down_left+roads[3][4]+down_right+spaces[25]+spaces[24]+spaces[23]+spaces[22]+spaces[21]+"\n"+
      yellow_space+yellow_space+yellow_space+yellow_space+yellow_space+spaces[36]+roads[3][3]+spaces[26]+red_space+red_space+red_space+red_space+red_space+"\n"+
      yellow_space+start[3][0]+white_road+start[3][1]+yellow_space+spaces[35]+roads[3][2]+spaces[27]+red_space+start[2][0]+white_road+start[2][1]+red_space+"\n"+
      yellow_space+white_road+yellow_space+white_road+yellow_space+spaces[34]+roads[3][1]+spaces[28]+red_space+white_road+red_space+white_road+red_space+"\n"+
      yellow_space+start[3][2]+white_road+start[3][3]+yellow_space+spaces[33]+roads[3][0]+spaces[29]+red_space+start[2][2]+white_road+start[2][3]+red_space+"\n"+
      yellow_space+yellow_space+yellow_space+yellow_space+yellow_space+spaces[32]+spaces[31]+spaces[30]+red_space+red_space+red_space+red_space+red_space;

      //Casillas especiales

      let casillasEspeciales = [[green_star + ":  ", false], [blue_star + ":  ", false],                          [red_star + ":  ", false], [yellow_star + ":  ", false],
                                [bases[0].emoji + ":  ", false], [bases[0].emoji + ":  ", false],
                                [bases[1].emoji + ":  ", false], [bases[1].emoji + ":  ", false],
                                [bases[2].emoji + ":  ", false], [bases[2].emoji + ":  ", false],
                                [bases[3].emoji + ":  ", false], [bases[3].emoji + ":  ", false]];

      for(i = 0; i < 4; i++)
      {
        for(j = 0; j < 4; j++)
        {
          switch(tokens[i][j].pos)
          {
            case 0:
              casillasEspeciales[0][0] += tokens[i][j].emoji + "   ";
              casillasEspeciales[0][1] = true;
              break;
            case 11:
              casillasEspeciales[1][0] += tokens[i][j].emoji + "   ";
              casillasEspeciales[1][1] = true;
              break;
            case 22:
              casillasEspeciales[2][0] += tokens[i][j].emoji + "   ";
              casillasEspeciales[2][1] = true;
              break;
            case 33:
              casillasEspeciales[3][0] += tokens[i][j].emoji + "   ";
              casillasEspeciales[3][1] = true;
              break;
            case bases[0].pos[0]:
              casillasEspeciales[4][0] += tokens[i][j].emoji + "   ";
              casillasEspeciales[4][1] = true;
              break;
            case bases[0].pos[1]:
              casillasEspeciales[5][0] += tokens[i][j].emoji + "   ";
              casillasEspeciales[5][1] = true;
              break;
            case bases[1].pos[0]:
              casillasEspeciales[6][0] += tokens[i][j].emoji + "   ";
              casillasEspeciales[6][1] = true;
              break;
            case bases[1].pos[1]:
              casillasEspeciales[7][0] += tokens[i][j].emoji + "   ";
              casillasEspeciales[7][1] = true;
              break;
            case bases[2].pos[0]:
              casillasEspeciales[8][0] += tokens[i][j].emoji + "   ";
              casillasEspeciales[8][1] = true;
              break;
            case bases[2].pos[1]:
              casillasEspeciales[9][0] += tokens[i][j].emoji + "   ";
              casillasEspeciales[9][1] = true;
              break;
            case bases[3].pos[0]:
              casillasEspeciales[10][0] += tokens[i][j].emoji + "   ";
              casillasEspeciales[10][1] = true;
              break;
            case bases[3].pos[1]:
              casillasEspeciales[11][0] += tokens[i][j].emoji + "   ";
              casillasEspeciales[11][1] = true;
              break;
          }
        }
      }

      let strCasillas = "";

      for(x = 0; x < 12; x++)
      {
        if(casillasEspeciales[x][1])
        {
          strCasillas += casillasEspeciales[x][0] + "\n";
        }
      }

      //Crear el embed

      let embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle(mostrarTurno)
        .setDescription(descripcion)
        if(boolGanador)
        {
          embed.addField("¡Ganador!", "🎉 " + ganador + " 🎊")
        }
        if(mostrarHistorial)
        {
          embed.addField("Historial: ", historial)
        }
        if(strCasillas != "")
        {
          embed.addField("Casillas Seguras: ", strCasillas)
        }
        else
        {
          embed.addField("Casillas Seguras: ", "???")
        }
        embed.addField("Jugador: ", mostrarJugador, true)
        .addField("Dado: ", fieldDice, true)
        if(advice != "")
        {
          embed = embed.setFooter("⚠️ Advertencia: " + advice);
        }

      return embed;
    } 

    //Llenar los jugadores

    function llenarJugador(user, x)
    {
      if(!jugadorObtenido[x])
      {
        nameJugador[x] = user.username;
        jugador[x] = user;
        jugadorObtenido[x] = true;
      }
    }

    //Comprobar movimientos

    function comprobarMovs(mod)
    {
      let hayMuro = false;
    
      for(y = 0; y < 4; y++)
      {
        if(!tokens[mod][y].finished)
        {
          if(tokens[mod][y].inBase && tokens[mod][y].pos + dice <= 104)
          {
            return true;
          }
          else if(tokens[mod][y].pos == -1 && dice == 6)
          {
            return true;
          }
          else if(tokens[mod][y].pos != -1 && !tokens[mod][y].inBase)
          {
            for(i = 1; i <= dice; i++)
            {
              for(x = 0; x < 4; x++)
              {
                for(j = 0; j < 2; j++)
                {
                  if((tokens[mod][y].pos + i) % 44 == bases[x].pos[j] && x != mod && !tokens[mod][y].inBase)
                  {
                    hayMuro = true;
                  }
                }
              }
            }

            if(!hayMuro)
            {
              return true;
            }

            hayMuro = false;
          }
        }
      }

      return false;
    }

    //Función Mover

    function moverToken(mod, name)
    {
      let hayMuro = false;
    
      for(i = 1; i <= dice; i++)
      {
        if((tokens[mod][name].pos + i) % 44 == (((mod + 3) % 4) * 11) + 9)
        {
          tokens[mod][name].inBase = true;
          break;
        }

        for(x = 0; x < 4; x++)
        {
          for(y = 0; y < 2; y++)
          {
            if((tokens[mod][name].pos + i) % 44 == bases[x].pos[y] && x != mod)
            {
              hayMuro = true;
            }
          }
        }

        if(hayMuro)
        {
          break;
        }
      }

      if(tokens[mod][name].pos == -1 && dice == 6)
      {
        tokens[mod][name].pos = (mod * 11) % 44;
        llenarHistorial(nameJugador[modulo] + " sacó " + tokens[modulo][name].emoji + " de la carcel");

        comerFicha(mod, name);
        crearBase(mod);

        dice = 0;
        advice = "";
      }
      else if(tokens[mod][name].pos != -1 && !hayMuro)
      {
        let restante = -1;

        //Si esta en base comprobar cuantos movimientos lleva hasta que entra

        if(tokens[mod][name].inBase)
        {
          for(i = 0; i <= dice; i++)
          {
            if((tokens[mod][name].pos + i) % 44 == (((mod + 3) % 4) * 11) + 9)
            {
              restante = dice - i;
              break;
            }
          }
          
          if(restante == 0)
          {
            romperBase(mod, tokens[mod][name].pos);
            tokens[mod][name].pos = (tokens[mod][name].pos + dice) % 44;
            llenarHistorial(nameJugador[modulo] + " movió " + tokens[modulo][name].emoji + " 🎲 " + dice + " espacios");
          }
          else if(restante == -1 && tokens[mod][name].pos + dice <= 104 && !tokens[mod][name].finished)
          {
            romperBase(mod, tokens[mod][name].pos);
            tokens[mod][name].pos += dice;
            llenarHistorial(nameJugador[modulo] + " movió " + tokens[modulo][name].emoji + "  🎲 " + dice + " espacios");

            if(tokens[mod][name].pos == 104)
            {
              tokens[mod][name].finished = true;
              llenarHistorial("¡" + tokens[mod][name].emoji + " terminó el recorrido!");
            }
          }
          else if(restante != 6 && restante != -1)
          {
            romperBase(mod, tokens[mod][name].pos);
            tokens[mod][name].pos = 99 + restante;
            llenarHistorial(nameJugador[modulo] + " movió " + tokens[modulo][name].emoji + "  🎲 " + restante + " espacios");

            if(tokens[mod][name].pos == 104)
            {
              tokens[mod][name].finished = true;
              llenarHistorial("¡" + tokens[mod][name].emoji + " terminó el recorrido!");
            }
          }
          else if(tokens[mod][name].finished)
          {
            advice = "La pieza ya terminó el recorrido";
            return;
          }
          else
          {
            advice = "La pieza debe llegar exacto al centro";
            return;
          }
        }
        else //Si no esta en base mover normalmente la pieza
        {
          romperBase(mod, tokens[mod][name].pos);
          tokens[mod][name].pos = (tokens[mod][name].pos + dice) % 44;
          llenarHistorial(nameJugador[modulo] + " movió " + tokens[modulo][name].emoji + "  🎲 " + dice + " espacios");
        }

        switch(tokens[mod][name].pos)
        {
          case 0:
            llenarHistorial(tokens[mod][name].emoji + " cayó en " + green_star);
            break;
          case 11:
            llenarHistorial(tokens[mod][name].emoji + " cayó en " + blue_star);
            break;
          case 22:
            llenarHistorial(tokens[mod][name].emoji + " cayó en " + red_star);
            break;
          case 33:
            llenarHistorial(tokens[mod][name].emoji + " cayó en " + yellow_star);
            break;
        }

        comerFicha(mod, name);
        crearBase(mod);

        if(dice != 6)
        {
          turno++;
        }

        dice = 0;
        advice = "";
      }
      else
      {
        advice = "No se puede mover esta pieza";
      }
    }

    //Funcion comer fichas

    function comerFicha(mod, name)
    {
      for(i = 0; i < 4; i++)
      {
        for(j = 0; j < 4; j++)
        {
          if(tokens[mod][name].pos == tokens[i][j].pos && i != mod && !tokens[i][j].inBase &&
             tokens[i][j].pos != 0 && tokens[i][j].pos != 11 &&
             tokens[i][j].pos != 22 && tokens[i][j].pos != 33)
          {
            tokens[i][j].pos = -1;
            llenarHistorial(tokens[mod][name].emoji + " se comió a " + tokens[i][j].emoji)
          }
        }
      }
    }

    //Funcion crear muro

    function crearBase(mod)
    {
      let contFichasBase = 0;
      let contFichas = 0;

      for(i = 100; i < 104; i++)
      {
        for(j = 0; j < 4; j++)
        {
          if(tokens[mod][j].pos == i)
          {
            contFichasBase++;
          }
        }

        if(contFichasBase > 1 && i != 0 && i != 11 && i != 22 && i != 33)
        {
          if(bases[mod].pos[0] == -2 && i != bases[mod].pos[1] && bases[mod].pos[0] != i)
          {
            llenarHistorial("Se creó un muro " + bases[mod].emoji);
            bases[mod].pos[0] = i;
            console.log(bases[mod].pos);
          }
          else if(bases[mod].pos[1] == -2 && i != bases[mod].pos[0])
          {
            llenarHistorial("Se creó un muro " + bases[mod].emoji);
            bases[mod].pos[1] = i;
            console.log(bases[mod].pos);
          }
        }
        
        contFichasBase = 0;
      }

      for(i = 0; i < 44; i++)
      {
        for(j = 0; j < 4; j++)
        {
          if(tokens[mod][j].pos == i)
          {
            contFichas++;
          }
        }

        if(contFichas > 1 && i != 0 && i != 11 && i != 22 && i != 33)
        {
          if(bases[mod].pos[0] == -2 && i != bases[mod].pos[1] && bases[mod].pos[0] != i)
          {
            llenarHistorial("Se creó un muro " + bases[mod].emoji);
            bases[mod].pos[0] = i;
            console.log(bases[mod].pos);
          }
          else if(bases[mod].pos[1] == -2 && i != bases[mod].pos[0])
          {
            llenarHistorial("Se creó un muro " + bases[mod].emoji);
            bases[mod].pos[1] = i;
            console.log(bases[mod].pos);
          }
        }
        
        contFichas = 0;
      }
    }

    //Funcion destruir Bases

    function romperBase(mod, pos)
    {
      let cont = 0;

      for(i = 0; i < 4; i++)
      {
        if(tokens[mod][i].pos == pos)
        {
          cont++;
        }
      }

      if(bases[mod].pos[0] == pos && cont - 1 < 2)
      {
        llenarHistorial("Se rompió el muro " + bases[mod].emoji);
        bases[mod].pos[0] = -2;
      }

      if(bases[mod].pos[1] == pos && cont - 1 < 2)
      {
        llenarHistorial("Se rompió el muro " + bases[mod].emoji);
        bases[mod].pos[1] = -2;
      }
    }

    //Funcion llenar historial

    function llenarHistorial(frase)
    {
      historial[0] = historial[1];
      historial[1] = historial[2];
      historial[2] = historial[3];
      historial[3] = historial[4];
      historial[4] = historial[5];
      historial[5] = colorHistorial + ":  " + frase;
    }
  }
}