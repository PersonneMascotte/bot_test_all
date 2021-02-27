const commandes = require("./commandes.js");

module.exports = class ping extends commandes {
    
    static match(message, client) {
        if(message.content === "!help"){
            return true
        }
    };

    static action(message, client) {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.channel.send(`Ce bot est un bot de template check mon github pour en savoir plus. J'ai faillu oublier, tu as ${timeTaken}ms`)
    }
}