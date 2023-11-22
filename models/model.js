const ask = require('../config/ai.js')

module.exports = class User {
  constructor() {
    this.locals = [];
  }

  getMsg() {
    return this.locals;
  }

  async sendMsg(msg) {
    this.locals.push(
      {
        id: this.locals.length + 1,
        sender: "me",
        message: msg
      });
    const response = await ask(msg);


      this.locals.push(
      {
        id: this.locals.length + 1,
        sender: "ai",
        message: response
      });

 
    
  }
}