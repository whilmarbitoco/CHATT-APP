module.exports = class User {
  constructor() {
    this.locals = {
      name: "whilmar",
      age: 18,
      course: "BSIT"
    };
  }

  getUser() {
    return this.locals;
  }

  setName(name) {
    this.locals.name = name;
  }

  setAge(age) {
    this.locals.age = age;
  }

  setCourse(course) {
    this.locals.course = course;
  }
}