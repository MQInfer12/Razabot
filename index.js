//Crear página para hostear el bot

const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('<h2>¡Razabot aliado en linea!</h2><img src="https://i.kym-cdn.com/photos/images/facebook/001/266/861/49a.jpg" width=480px>')
})

let port = process.env.PORT || 3000;
app.listen(port)

require('dotenv').config()

//Código del bot

const discord = require('discord.js');
const fs = require('fs');
const client = new discord.Client();
const config = require('./config.json')

client.commands = new discord.Collection();
client.aliases = new discord.Collection();
client.queue = new Map();

client.on('ready', () => 
{
  console.log("¡Razabot aliado en línea!");
});

const Categories = ["images", "misc", "randoms", "games"];

Categories.forEach(async function(Category) 
{ 
    fs.readdir(`./commands/${Category}`, async function(error, files) 
    {
      if (error) throw new Error(`Error en el comando\n${error}`);
      files.forEach(async function(file) 
      {
        if (!file.endsWith(".js")) throw new Error(`El archivo no termina en .js`);
        let command = require(`./commands/${Category}/${file}`);
        if (!command.name || !command.aliases) throw new Error(`¡No existe el comando!`);
        if (command.name) client.commands.set(command.name, command);
        if (command.aliases) command.aliases.forEach(aliase => client.aliases.set(aliase, command.name));
        if (command.aliases.length === 0) command.aliases = null;
      });
    });
});

client.on("message", async message => 
{
  let Prefix = config.prefix
  if (message.author.bot || !message.guild || message.webhookID) return;
  if (!message.content.startsWith(Prefix)) return;
  let args = message.content.slice(Prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();
  let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
  if (!command) return console.log(`¡No se encontró el comando!`);
  if (command)
  {
    command.run(client, message, args);
  };
});

client.login(process.env.token);