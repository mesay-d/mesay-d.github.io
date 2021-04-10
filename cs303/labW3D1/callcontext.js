// // // let group = {
// // //     title: "Our Group",
// // //     students: ["John", "Pete", "Alice"],

// // //     showList() {
// // //         this.students.forEach(function (student) { console.log(this.title + ': ' + student); }.bind(this)
// // //         );
// // //     }
// // // };
// // // group.showList();

// // // function sumAll(...args) { // args is the name for the array
// // //     let sum = 0;
  
// // //     for (let ar of args) 
// // //     sum += ar;
  
// // //     return sum;
// // //   }
  
// // //   console.log( sumAll(1) ); // 1
// // //   console.log( sumAll(1, 2) ); // 3
// // //   console.log( sumAll(1, 2, 3) ); 
// // // let counter = 0;

// // // // Function to increment counter
// // // function add() {
// // //   counter += 1;
// // // }

// // // // Call add() 3 times
// // // add();
// // // add();
// // // add();
// // // console.log(counter)
// // // 
// // // let counter = 0;

// // // // Function to increment counter
// // // function add() {
// // //   let counter = 0;
// // //   counter += 1;
// // // }

// // // // Call add() 3 times
// // // add();
// // // add();
// // // add();
// // // console.log(counter)

// // // function add() {
// // //     var counter = 0;
// // //     function plus() {counter += 1;}
// // //     plus();  
// // //     return counter; 
// // //   }
// // //   add()
// // //   add()
// // // console.log(add())

// // var add = (function () {
// //     var counter = 0;
// //     return function () {counter += 1; return counter}
// //   })();
  
// //   let b=add();
// //   add();
// //   add();
// //   b;
// //   b;
// //   console.log(b)

// let linkedlist = {};
// linkedlist.add = function(element) {
// if (this.value === undefined) {
// this.value = element;
// this.next = null;
// } else {
// let current = this;
// while (current.next) {
// current = current.next;
// }

// }
// console.log(linkedlist)
// }
// linkedlist.add(1);
// linkedlist.add(2);
// linkedlist.add(3);

// linkedlist.remove = function(element) {
//     var current = this;
//     var prev = null;
//     while (current) {
//     if (current.value === element) {
//     if (prev == null) {
//     this.value = current.next.value;
//     this.next = current.next.next;
//     } else {
//     prev.next = current.next;
//     }
//     return true;
//     }
// prev = current;
// current = current.next;
// }
// return false;
// }
// linkedlist.printHelper = function(list, result) {
// if (list.next == null) {
// result += list.value;
// return result;
// }
// result += list.value + ',';
// return this.printHelper(list.next, result);
// }
// linkedlist.print = function() {
// let result = 'LinkedList{';
// result = this.printHelper(this, result);
// result += '}';
// console.log(result);
// }
// linkedlist.add(1);
// linkedlist.add(2);
// linkedlist.add(3);
// linkedlist.print(); //in the console, you should see: LinkedList{1,2,3}
// linkedlist.remove(3);
// linkedlist.print(); //in the c
// let name = "John";
// function sayHi() {
// console.log("Hi, " + name);
// }
// name = "Pete";
// sayHi();
// function makeWorker() {
//     let name1 = "mesy";
//     return function() {
//     console.log(name1);
//     };
//     }
//     let name1 ="mem";
//     // create a function
//     let work = makeWorker();
//     // call it
//     work(); 

// function makeCounter() {
//     let count = 0;
//     return function() {
//     return count++; 
//     };
//     }
//     let counter = makeCounter();
//     console.log( counter() ); // 0
//     console.log( counter() )
//     let counter1 = makeCounter();
//     console.log( counter1() ); // 0
//     console.log( counter() )
//     console.log( counter1() ); // 0
//     console.log( counter() )


function incl(arr1){
    return function c(x){
        // for(const n of arr1){
        //     if(n===x){
        //         return true;
        //     }
        //}
        return arr1.include(x)
    }
}
//2-5

// function inbe(x,y){
//     return function g(v){
//         return v>=x&&v<=y
//     }
// }
// let arr=[1,2,3,4,5,6];
// let arr1=[1,2,3,4]
// let c=arr.filter(incl(arr1))
// let b=arr.filter(inbe(2,5))
//console.log(b)
// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
//   ];

//   //let sor=users.sort((a,b)=>a.name>b.name?1:-1)
//   //console.log(sor)
// function fild(fiel){
//     return ((a,b)=>a[fiel]>b[fiel]?1:-1);
// }
// let sor=users.sort(fild("name"))
//   console.log(sor)
// let john = { name: "John", surname: "Smith", age: 10 };
// let pete = { name: "Pete", surname: "Hunt", age: 20 };
// let people = [ john, pete];

// //Use the map function to map the people array to the following:
// [{ fullName: "John Smith", id: 1 },
// { fullName: "Pete Hunt", id: 2 },]
// let output=people.map((a)=>{"fullName : "+ a.name+" "+a.surname,"age : "+a.age})
 //[5] Retirm the smallest number of the following array using the Array.reduce method
const numArray = [5, 44, 1, 33];
let d=numArray.reduce((accum,min)=>accum<min?accum:min,10)
console.log(d)
 let john = { name: "John", surname: "Smith", age: 10 };
let pete = { name: "Pete", surname: "Hunt", age: 20 };
let people = [ john, pete];
// let output=people.map((a)=>{fullName:`${a.name}${a.surname}`,age:a.age})
// console.log(output)
let usersMapped = people.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    age: user.age
}));
console.log(usersMapped)
let youngest=people.reduce((a,b)=>())