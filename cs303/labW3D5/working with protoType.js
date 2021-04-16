"use strict";


// let animal = {
//     jumps: null
// };
// let rabbit = {
    
//     jumps: true,
//     __proto__: animal,
// };

// console.log(rabbit.jumps); // true (1)

// delete rabbit.jumps;

// console.log(rabbit.jumps); // null (2)

// delete animal.jumps;

// console.log(rabbit.jumps); // undefined (3)
// function User(firstname, lastname, birthDate) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.birthDate = birthDate;
// }
// User.prototype.getAge = getAge;
// User.prototype.getFullName = getFullName;
// let user1 = new User('John', 'Smith', new Date('2000-10-01'));
// let user2 = new User('Edward', 'Hopkins', new Date('1991-11-14'));
// function getFullName() { return this.firstname + ' ' + this.lastname; }
// function getAge() { return new Date().getFullYear() - this.birthDate.getFullYear(); }


class Animal {
    constructor(name) {
    this.speed = 0;
    this.name = name;
    }
    run(speed) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
    }}
    
    class Rabbit extends Animal {
    hide() {
    alert(`${this.name} hides!`);
    }
    stop() {
    super.stop(); // call parent stop
    this.hide(); // and
    }}



 



