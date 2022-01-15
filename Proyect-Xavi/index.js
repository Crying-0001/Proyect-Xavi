///////////////////Servidor/////////////////////////////////

const http = require("http");
http.createServer((_, res) => res.end("Conectado al server correctamente")).listen(8080)

////////////////////constantes///////////////////////////

const aoijs = require("aoi.js")
const mySecret = process.env['TOKEN']
const bot = new aoijs.Bot({
token: process.env.TOKEN, //Token de tu bot
prefix: "m!", //Prefix de tu bot
intents: ["GUILDS", "GUILD_MESSAGES"] //Discord Intents
})

////////////////////Eventos//////////////////////////////

bot.onMessage()

//////////////////Evento de inicio///////////////////////

bot.readyCommand({
    channel: "",
    code: `$log[Conectado a $userTag[$clientID]]`
})

/////////////////////////handler//////////////////////////

require('./utils/status')(bot)
require('./utils/callbacks')(bot)
require('./utils/variables')(bot)

////////////////////////handler//////////////////////////

const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./commands/') 
