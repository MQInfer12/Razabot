module.exports = 
{
  name: "insulto",
  aliases: [],
  description: "Te insulta",
  run: async (client, message, args) => 
  {
    var insultos = ["Bocachancla", "Caranchoa", "Abrazafarolas", "Cabezaalberca", "Cabezabuque", "Calientahielos", "Calzamonas", "Carapapa", "Arrastracueros", "Caraculo", "Carajaula", "Carapijo", "Chupasangre", "Pijachica", "Cuerpoescombro", "Dondiego", "Estulto", "Fantoche", "Gilipuertas", "Huevón", "Longanizas", "Lameplatos", "Mameluco", "Mastuerzo", "Morlaco", "Morroestufas", "Papanatas", "Pelagallos", "Percebe", "Rastrapajo", "Revientabaules", "Sacamuelas", "Sonso", "Tochopito", "Tontaco", "Tuercebotas", "Zarrapastroso", "Zoquete", "Otaku", "AHORA METEN EL TRIPLE LA RE CONCHA BIEN PUTA DE SUS MADRES JUGADORES PORONGA QUE SE HICIERON LOS PIOLA LLEGANDO INVICTOS A UNA FINAL PARA QUE SE LES CIERRE EL ORTO AHORA CONTRA ESPAÑA HIJOS DE RE MIL PUTA. ERA EL ULTIMO PARTIDO DE SCOLA FORROS, NI UNA ALEGRIA LE DEJAN AL VETERANO"];

    var rndin = Math.floor(Math.random()*(insultos.length));

    message.reply(insultos[rndin]);
  }
}