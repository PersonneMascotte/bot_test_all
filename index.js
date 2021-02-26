const Discord = require('discord.js')
const Client = new Discord.Client()
const config = require("./config.json")
prefixe = "@"

client.on("ready", () => {
    console.log("Présent !")
});

const Command = require("./commands/Command");
//const (nom de la commande) = require("lien vers le fichier ex : ./commandes/.");

client.on("message", message => {

    //(nom de la commande a remettre).parse(message, client);
    
});//laison commande

client.login(config.token)
