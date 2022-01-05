module.exports = 
{
  name: "excusa",
  aliases: [],
  description: "Te dice una excusa",
  run: async (client, message, args) => 
  {
    var inicio = ["Perdón, no puedo ir, ","Disculpa mi ausencia, ", "No me vas a creer pero ", "Te cuento: ", "No puedo ir por que ", "Me vas a odiar pero ", "Estaba yo en lo mio, cuando de pronto ", "Me siento de la chingada, por que ", "Siento no poder ir, ", "Vas a pensar que es una excusa, pero "];

    var medio = ["mi sobrino ", "el fantasma de Hitler ", "el Papa ", "mi ex ", "la banda de la escuela ", "el tata Evo ", "un payaso triste ", "el niño que canta Movimiento Naranja ", "Faraon Love Shady ", "mi cita de Tinder ", "el Ojoso "];

    var final = ["se cagó en mi cama.", "murió en mis brazos.", "no deja de contarme chistes malos.", "esta teniendo una crisis de ansiedad.", "me contagió de sifilis.", "me retó a un 1v1.", "se llevó mi carro.", "me apuñaló.", "encontró mi mota.", "me serruchó mi morra.", "subió mis nudes a instagram.", "me contagió su desgarre supra-anal agudo crónico hereditario."];

    var rndin = Math.floor(Math.random()*(inicio.length));
    var rndme = Math.floor(Math.random()*(medio.length));
    var rndfi = Math.floor(Math.random()*(final.length));

    var excompleto = inicio[rndin] + medio[rndme] + final[rndfi];

    message.channel.send(excompleto);
  }
}