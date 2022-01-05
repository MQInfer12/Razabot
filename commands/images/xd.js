const Discord = require('discord.js');

module.exports = 
{
  name: "xd",
  aliases: ["equisde"],
  description: "xdxdxddxd",
  run: async (client, message, args) => 
  {
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

    var rndxd = Math.floor(Math.random()*(imgxd.length));

    img = imgxd[rndxd];
    message.channel.send(img);
  }
}