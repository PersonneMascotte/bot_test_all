const event = require("./event.js");

module.exports = class ready extends event {
    
    static action(ready, client) {
    console.log("Présent !")
    }
}


