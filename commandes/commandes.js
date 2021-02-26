module.exports = class Command {

    static parse(message, client) {
  
      if(this.match(message, client)) {
        this.action(message, client)
        return true
      }
      return false
    }
  
    static match(message, client) {
      return false
    }
  
    static action(message, client) {
       
    }

}