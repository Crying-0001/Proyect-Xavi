module.exports = (bot) => {
////No borres el module.exports = (bot) => {} por que te saldra error de consola////
bot.status({
  text: "ESTADO", //colocale el texto que quieras en el estado
  type: "PLAYING", //usa PLAYING para que diga jugando o WATCHING para que diga viendo
  time: 15  //Puedes colocar el tiempo en el que el estado cambiara en segundos
})
///segundo estado
bot.status({
  text: "$serverCount Servidores", //Puedes colocar funciones en el estado :D
  type: "WATCHING",
  time: 15
})


}