// let head = {
//     glasses: 1,
//    };
//     let table = {
//     pen: 3,
//     __proto__:head,
//     };
//     let bed = {
//     sheet: 1,
//     pillow: 2 ,
//      __proto__:table,

//     };
//     let pockets = {
//     money: 2000,
//     __proto__:bed,
//     };
//     console.log("expect 3: ", pockets.pen);
//    console.log("expect 1: ", bed.glasses);

// let animal = { eats: true };
// function Rabbit(name) { this.name = name;}
// Rabbit.prototype = animal;
// let rabbit = new Rabbit("White Rabbit");
// console.log( rabbit.eats ); // true

// let animal = { eats: true };
// let rabbit = new Rabbit("White Rabbit");

// function User(firstname, lastname, birthDate) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.birthDate = birthDate;
//     }
//     let user1 = new User('John', 'Smith', new Date('2000-10-01'));
//     let user2 = new User('Edward', 'Hopkins', new Date('1991-11-14'));
//     function getFullName() { return this.firstname + ' ' + this.lastname;}
//     function getAge() {return new Date().getFullYear() - this.birthDate.getFullYear();}
//     User.prototype.getAge()=getAge;
//     User.prototype.getFullName()=getFullName;