module.exports = class User {
  constructor() {
    this.locals = [
      {
        id: 1,
        sender: "me",
        message: "hello world"
      },
      {
        id: 2,
        sender: "john",
        message: "hello from john"
      },
    ];
  }

  getMsg() {
    return this.locals;
  }

  addMsg(msg) {
    this.locals.push(
      {
        id: this.locals.length + 1,
        sender: "me",
        message: msg
      },
    );
  }
}