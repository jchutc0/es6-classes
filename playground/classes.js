class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }         // constructor

  getGreeting() {
    return `Hi! I'm ${this.name}!!`;
  }         // getGreeting

  toString() {
    // return this.getGreeting();
    return JSON.stringify(this);
  }         // toString

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }         // getDescription

}           // Person class

// var me = new Person('Casey', 39);
// var ssh = new Person();
//
// console.log('me', me);
// console.log(me.getGreeting());
//
// console.log('ssh', ssh);
// console.log(ssh.getGreeting());
//
// console.log({age: 25}.toString());
// console.log(me.toString());
// console.log('Me', me.getDescription());
// console.log('Anon', ssh.getDescription());

class Child extends Person {

  constructor(name, age, like) {
    super(name, age);
    this.like = like;
  }         // constructor

  getGreeting() {
    return `Hiiiiii!!! My name is ${this.name} and I like ${this.like}.`;
  }         // getGreeting

}           // Child


var me = new Person('Casey', 39);
console.log(me.getGreeting());

var kiddo = new Child('Lacey', 7, 'flowers');
console.log(kiddo.getGreeting());


class Baby extends Person {

  getGreeting() {
    return "Waaaaaaaaaah!!!!"
  }         // getGreeting

}           // Baby

var james = new Baby();
console.log(james.getGreeting());
