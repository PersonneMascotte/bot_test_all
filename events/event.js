module.exports = class events {

    static parse(ready, client) {
  
      if(this.action(ready, client)) {
        return true
      }
      return false
    }
  
    static action(ready, client) {
       
    }

}