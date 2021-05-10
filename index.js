const express = require('express')
const app = express()
const puppeteer = require('puppeteer');

app.get('/', function(req, res) {
  res.send('Hello World')
})
let port = process.env.PORT || 3000;
app.listen(port)

require('dotenv').config()
/////////////////////////////////////////////////////
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Razabot aliado en linea!");
});

client.on("message", msg => {

  if (msg.content === "Scrap")
  { 
    const img = new Discord.MessageAttachment();

    (async() => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto('https://www.youtube.com');
      await page.screenshot({ path: img });
    })();
    
    msg.channel.send(img);
  }

  if (msg.content === "Cero" || msg.content === "cero" || msg.content === "0") {
    msg.channel.send("Te reviento el agujero!");
  }
  if (msg.content === "Cinco" || msg.content === "cinco" || msg.content === "5") {
    msg.channel.send("Por el culo de la hinco!");
  }
  if (msg.content === "Nueve" || msg.content === "nueve" || msg.content === "9") {
    msg.channel.send("En tu ojete se me mueve!");
  }
  if (msg.content === "Trece" || msg.content === "trece" || msg.content === "13") {
    msg.channel.send("Mientras mas me chupas, mas me crece!");
  }
  if (msg.content === "thirteen" || msg.content === "Thirteen")
  {
    msg.channel.send("The more you suck it, more me grow it");
  }
  if (msg.content === "PROTOTIPO" || msg.content === "prototipo")
  {
    msg.channel.send("Metete el prototipo por el qlo.");
  }

  if (msg.content === "Vas a llorar?" || msg.content === "vas a llorar?")
  {
    const img = new Discord.MessageAttachment("https://cdn.eldeforma.com/wp-content/uploads/2020/09/llora-pues-meme.jpg");
    msg.channel.send(img);
  }
  if (msg.content === "C vah" || msg.content === "c vah")
  {
    const img = new Discord.MessageAttachment("http://pa1.narvii.com/6430/89e71cb35411ee9cc0fef0bd60ae50ffd4bd6666_00.gif");
    msg.channel.send(img);
  }
  if (msg.content === "dale capo" || msg.content === "Dale capo" || msg.content === "dale kpo" || msg.content === "Dale kpo")
  {
    const img = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/755955428923277324/840086863100117032/2Q.png");
    msg.channel.send(img);
  }
  if (msg.content === "Messirve" || msg.content === "messirve" || msg.content === "MESSIRVE")
  {
    const img = new Discord.MessageAttachment("https://media1.tenor.com/images/6a75e77e89a97f30c500386d6d03d276/tenor.gif?itemid=19733506");
    msg.channel.send(img);
  }
  if (msg.content === "No messirve" || msg.content === "no messirve" || msg.content === "NO MESSIRVE")
  {
    const img = new Discord.MessageAttachment("https://media1.tenor.com/images/91f9b09a31099f995977ca5753855447/tenor.gif?itemid=18260260");
    msg.channel.send(img);
  }

  if (msg.content === "What" || msg.content === "what" || msg.content === "WHAT")
  {
    const img = new Discord.MessageAttachment("https://media1.tenor.com/images/8f7a28e62f8242b264c8a39ba8bea261/tenor.gif?itemid=15922897");
    msg.channel.send(img);
  }

  if (msg.content === "Que nervios" || msg.content === "que nervios")
  {
    const img = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/642481708922306602/837102296638685234/Z.png");
    msg.channel.send(img);
  }

  if (msg.content === "Ojoso") {
    msg.reply("Aparte de simp, manco.");
  }
  
  var saludos = ["Que pex", "Que onda pinche joto", "No me jodas", "Es noche de fri fayer!, no conozco a nadie", "Hey!", "Llora pues", "Que tranza"];
  const imgxd = ["https://www.centralcode.net/cdn-watimg/wp642767-20201128.jpg", "https://i.pinimg.com/736x/3a/06/92/3a069221ea23b0c2e0989e06cdf45825.jpg",
  "https://www.12minutos.com/thumb/4/a/9/4/a9446fd94731e5c810b2292b5e8fe3d4.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4Lcwp1ezwCjCtbpejLeBpXwTpxpIGEGHAA&usqp=CAU",
  "https://img.wattpad.com/696642d456fb23b23786883035935cb5e84d318e/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4e576938472d53383064653451773d3d2d37352e313566356363396361623363646362353933383336343737363938392e6a7067?s=fit&w=720&h=720", "https://i.pinimg.com/564x/08/91/aa/0891aad062fad1f1c50805c4578c2a41.jpg", "http://images7.memedroid.com/images/UPLOADED461/5eebf09e11f46.jpeg",
  "https://i.redd.it/u2hs0mn2q8051.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Ff0VfvFka2NRGo39tcnh0VMPl2oqzzf_uA&usqp=CAU",
  "https://i.pinimg.com/736x/fd/4e/61/fd4e614a5c0fb835e7858473286f3058.jpg",
  "https://i.ytimg.com/vi/wtWHQups5WY/hqdefault.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDdy0zNFi4Qq3JZW1GC0lHguCeoXCvblokfg&usqp=CAU",
  "http://images7.memedroid.com/images/UPLOADED690/5ea57852251e3.jpeg", "https://cdn.discordapp.com/attachments/642481708922306602/834513825700773938/unknown.png", "https://cdn.discordapp.com/attachments/642481708922306602/834514538732322831/unknown.png", "https://cdn.discordapp.com/attachments/642481708922306602/834514885299666974/unknown.png", "https://cdn.discordapp.com/attachments/642481708922306602/834515042149335091/unknown.png", "https://cdn.discordapp.com/attachments/642481708922306602/834515251239452751/unknown.png", "https://cdn.discordapp.com/attachments/642481708922306602/834515406667382844/unknown.png", "https://cdn.discordapp.com/attachments/642481708922306602/834515610230325318/unknown.png", "https://cdn.discordapp.com/attachments/642481708922306602/834515738323714058/unknown.png", "https://cdn.discordapp.com/attachments/642481708922306602/834515895404593182/unknown.png", "https://cdn.discordapp.com/attachments/642481708922306602/834516120386928680/unknown.png"];

  const messirvegifs = ["https://media1.tenor.com/images/6a75e77e89a97f30c500386d6d03d276/tenor.gif?itemid=19733506",
  "https://media1.tenor.com/images/91f9b09a31099f995977ca5753855447/tenor.gif?itemid=18260260", "https://cdn.discordapp.com/attachments/642481708922306602/834512997736382564/unknown.png"];

  var rndsal = Math.floor(Math.random()*(saludos.length));
  var rndxd = Math.floor(Math.random()*(imgxd.length));
  var rndmessirve = Math.floor(Math.random()*(messirvegifs.length));

  if (msg.content === "Hola" || msg.content === "hola"){
    msg.reply(saludos[rndsal]);
  }
  if (msg.content === "xd" || msg.content === "XD" || msg.content === "Xd" || msg.content === "xD"){
    img = imgxd[rndxd];
    msg.channel.send(img);
  } 
  if (msg.content === "Tessirve?" || msg.content === "tessirve?" || msg.content === "TESSIRVE?"){
    img = messirvegifs[rndmessirve];
    msg.channel.send(img);
  } 
});

client.login(process.env.token);