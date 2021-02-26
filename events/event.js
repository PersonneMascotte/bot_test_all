module.exports = class events {

    static parse(ready, guildMemberAdd, raw, client) {
  
      if(this.action(ready, guildMemberAdd, raw, client)) {
        return true
      }
      return false
    }
  
    static action(ready, guildMemberAdd, raw, client) {
       
    }

}