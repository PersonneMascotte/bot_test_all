const Discord = require('discord.js')
const client = new Discord.Client()
const config = require("./config.json")

//const (nom de la commande ou de l'event) = require("lien vers le fichier ex : ./commandes/.");
const commandes = require("./commandes/commandes");
const ready = require("./events/ready");
const ping = require("./commandes/ping")


client.on("message", message => {

    //(nom de la commande a remettre).parse(message, client);
    commandes.parse(message, client);
    ping.parse(message, client);

});//laison commandes

client.on("ready", () => {

    //(nom de l'event a remettre).parse(ready ou guildMemberAdd, client);
    ready.parse(ready, client)

});//laison events ex add role for new member

client.on("raw", event => {

    //(nom de l'event a remettre).parse(raw, client);

});//liason event emoji ex role react

client.login(config.token)
