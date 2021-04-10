// let name = "John";
// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi();

// function makeCounter() {
//     let count = 0;
//     /**
//     * @returns {number} value of counter BEFORE increment
//     */
//     function increment() {
//     return count++;
//     }
//     return increment;
//    }
//    const counter1 = makeCounter();
//    const counter2 = makeCounter();
//    counter1();
//    counter1();
//    //counter2();
//    console.log("expect 2 ", counter1());
//    //console.log("expect 1 ", counter2());

// //   function makeArmy() {
// //     let shooters = [];
// //     for (let i = 0; i < 10; i++) {
// //     let shooter = function() { // shooter function
// //     console.log(i); // should show its number
// //     };
// //     shooters.push(shooter);
// //     }
// //     return shooters;
// //     }
// //     let army = makeArmy();
// //     // Now the code works correctly
// //     army[0](); // 0
// //     army[5](); // 5
// //     army[9](); // 9

// // function makeWorker() {
// //     let name = "Pete";
  
// //     return function() {
// //       console.log(name);
// //     };
// //   }
  
// //   let name = "John";
  
// //   // create a function
// //   let work = makeWorker();
  
// //   // call it
// //   work(); // what will it show?
// // function Counter() {
// //     let count = 0;
  
// //     this.up = function() {
// //       return ++count;
// //     };
// //     this.down = function() {
// //       return --count;
// //     };
// //   }
  
// //   //let counter = new Counter();
  
// //   console.log( Counter.up() ); // ?
// //   console.log( counter.up() ); // ?
// //   console.log( counter.down() )
// // let phrase = "Hello";

// // if (true) {
// //   let user = "John";
// // //console.log(phrase,user)
// //  let sayHi= function () {
// //     console.log(`${phrase}, ${user}`);
// //   }
  
// // }
// // sayHi();

// // function sum(a) {

// //     return function(b) {
// //       return a + b; // takes "a" from the outer lexical environment
// //     };
  
// //   }
  
// //  console.log( sum(1)(2) ); // 3
// //   console.log( sum(5)(-1) ); // 4

// // const sum = a => b=> a + b;
 
// //  console.log(sum(1)(2));   //3

// // let x = 1;

// // function func() {
// //   console.log(x); // ?

// //    x = 2;
// // }

// // func();
// // function inBetween(a, b) {
// //     return function(x) {
// //       return x >= a && x <= b;
// //     };
// //   }
  
// //   let arr = [1, 2, 3, 4, 5, 6, 7];
// //   console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6


// // let users = [
// //     { name: "John", age: 20, surname: "Johnson" },
// //     { name: "Pete", age: 18, surname: "Peterson" },
// //     { name: "Ann", age: 19, surname: "Hathaway" }
// //   ];

// // // by name (Ann, John, Pete)
// // //users.sort((a, b) => a.name > b.name ? 1 : -1);

// // // age (Pete, Ann, John)
// // //users.sort((a, b) => a.age > b.age ? 1 : -1);


// // function byField(fieldName){
// //     return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
// //   }
// //   //console.log(users.sort(byField("name")));
// //   //console.log(users.sort(byField("name")));
// //   console.log(users.sort(byField("age")))

// // function makeArmy() {
// //     let shooters = [];
  
// //     let i = 0;
// //     while (i < 10) {
// //       let shooter = function() { // create a shooter function,
// //         console.log( i ); // that should show its number
// //       };
// //       shooters.push(shooter); // and add it to the array
// //       i++;
// //     }
  
// //     // ...and return the array of shooters
// //     return shooters;
// //   }
  
// //   let army = makeArmy();
// //   console.log(army)
// // function makeArmy() {
// //     let shooters = [];
  
// //     let i = 0;
// //     while (i < 10) {
// //         let j=i;
// //       let shooter = function() { // create a shooter function,
// //         console.log( j ); // that should show its number
// //       };
// //       shooters.push(shooter); // and add it to the array
// //       i++;
// //     }
  
// //     // ...and return the array of shooters
// //     return shooters;
// //   }
  
// //   let army = makeArmy();
// //  army[4]()

// // function sayHii() {
// //  console.log('Hello');
// //   }
// //   let result=sayHii()

// //   setTimeout(sayHii, 8000);
// //   console.log("i am super")
//   // function sayHi(phrase, who) {
//   //  console.log( phrase + ', ' + who );

//   //   }
//   //   setTimeout(sayHi, 1000, "Hello", "John"); 
//   //   console.log("i am here")

//   //   function sayHo(){
//   //     return function(){
//   //       console.log("hi")
//   //     }
//   //   }
//   //   setTimeout(sayHo(),9000)

//   // const temeid=setTimeout(()=>console.log("hi.......me"),5000)
//   // clearTimeout(temeid);
//   const timerid=setInterval(() => {
//     console.log(new Date())},1000)
// setTimeout(() => {
//   clearInterval(timerid)
  
// }, 5000);
//"use strict";
