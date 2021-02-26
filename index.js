const Discord = require('discord.js')
const client = new Discord.Client()
const config = require("./config.json")

//const (nom de la commande ou de l'event) = require("lien vers le fichier ex : ./commandes/.");
const commandes = require("./commandes/commandes");
const ready = require("./events/ready");


client.on("message", message => {

    //(nom de la commande a remettre).parse(message, client);
    commandes.parse(message, client);

});//laison commandes et events

client.on("ready", () => {

    //(nom de l'event a remettre).parse(ready, guildMemberAdd, raw, client);
    ready.parse(ready, client)

});

client.login(config.token)
