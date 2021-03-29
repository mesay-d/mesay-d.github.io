"use strict"

// reduce
//  - find sum of numbers
//  - find average of numbers
//  - find max of numbers
//  - find max for ages
//  - use a chain of map filter reduce to find the average age of people with even number ages
//  - use a chain of map filter reduce to find the average age of people with odd number ages

const numArray = [5, 0, 7, 77, -20, 300, 51, 2]
const peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, {
    name: "Barney", age: 80
}]

function sumOfNumbers(arr) {

    return arr.reduce((tot, age) => tot + age, 0)

}
let test44 = sumOfNumbers(numArray)
console.log(test44)

function averageOfNumbers(arr) {
    let x = arr.reduce((tot, num) => tot + num, 0)
    return x / arr.length

}


let test33 = averageOfNumbers(numArray)
console.log(test33)


function maxOfNumbers(arr) {

    return arr.reduce((a, b) => a > b ? a : b)

}
let test22 = maxOfNumbers(numArray)
console.log(test22)

function maxOfAges(arr) {
    return arr.reduce((a, b) => a.age > b.age ? a : b)


}
let test11 = maxOfNumbers(peopleArray)
console.log(test11)

// console.log("use a chain of map filter reduce to find the average age of people with even number ages")
function avgAgeEvenNum(arr) {
    let ages = arr.filter(age => age.age % 2 === 0)

    let chained = arr.map(age => age.age)
        .filter(age => age % 2 === 0)
        .reduce((tot, age) => tot + age, 0)
    // console.log(ages)//[ { name: 'William', age: 6 }, { name: 'Barney', age: 80 } ]
    return chained / ages.length//86/2
}

let test = avgAgeEvenNum(peopleArray)
console.log(test)



function avgAgeoddNum(arr) {
    let oddages = arr.filter(age => age.age % 2 !== 0)

    let chained = arr.map(age => age.age)
        .filter(age => age % 2 !== 0)
        .reduce((tot, age) => tot + age, 0)
    // console.log(oddages)//[ { name: 'William', age: 6 }, { name: 'Barney', age: 80 } ]
    return chained / oddages.length//28/2=14

}
let test2 = avgAgeoddNum(peopleArray)
console.log(test2)
// function chainMapFilterReduce(array){
    //return array.map(addNumber).filter(Even).reduce((average))
//}