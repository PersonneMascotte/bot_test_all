const commandes = require("./commandes.js");

module.exports = class ping extends commandes {
    
    static match(message, client) {
        if(message.content === "!ping"){
            return true
        }
    };

    static action(message, client) {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.channel.send(`Pong ! ${timeTaken}ms`)
    }
}