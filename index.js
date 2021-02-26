const Discord = require('discord.js')
const client = new Discord.Client()
const config = require("./config.json")
prefixe = "@"

//const (nom de la commande) = require("lien vers le fichier ex : ./commandes/.");
const commandes = require("./commandes/commandes");
const ready = require("./events/ready");


client.on("message", message => {

    //(nom de la commande a remettre).parse(message, client);
    commandes.parse(message, client);

});//laison commandes et events

client.on("ready", () => {

    ready.parse(ready, client)

});

client.login(config.token)
