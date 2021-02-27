const event = require("./event.js");

module.exports = class ready extends event {
    
    static action(ready, client) {
    console.log("Présent !")
    client.user.setStatus("dnd");
    client.user.setActivity("prefix : !, pour plus d'info !help");
    }
}


