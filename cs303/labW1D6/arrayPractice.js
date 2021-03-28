"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge}; //add all of your function names here that you need for the node mocha tests


function doubleNums(arr){
return arr.map(num => num * 2);
}

function doubleAges(arr){
    return arr.map((a)=>a.age*2)

}

function filterEven(arr){
    return arr.filter((a)=>a.age%2==0)

}

function filterOver10(arr) {
    return arr.filter((a)=>a.age>10)

}

function findEvenNum(arr){
    return arr.find((a)=>a%2==0)

}

function findEvenAge(arr){
    return arr.find((a)=>a.age%2==0)


}

function includesEvenNum(arr){
    return arr.include((a)=>a%2==0)
 
}

function includesEvenAge(arr){
    return arr.include((a)=>a.age%2==0)

}