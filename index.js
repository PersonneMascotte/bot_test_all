const Discord = require('discord.js')
const client = new Discord.Client()
const config = require("./config.json")

//const (nom de la commande ou de l'event) = require("lien vers le fichier ex : ./commandes/.");
const commandes = require("./commandes/commandes");
const event = require("./events/event")
const ready = require("./events/ready");
const ping = require("./commandes/test")


client.on("message", message => {

    //(nom de la commande a remettre).parse(message, client);
    commandes.parse(message, client);
    event.parse(message, client)
    ping.parse(message, client);

});//laison commandes

client.on("ready", () => {

    //(nom de l'event a remettre).parse(ready, client);
    ready.parse(ready, client)

});//laison events console ou statut ex console.log

client.on("guildMemberAdd", async member => {

    //(nom de l'event a remettre).parse(guildMemberAdd, client);

})//laison event new member ex add role for new member

client.on("raw", event => {

    //(nom de l'event a remettre).parse(raw, client);

});//liason event emoji ex role react

client.login(config.token)
