// "use strict"
// /* eslint-disable */
// /* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator, copySorted, getAverageAge, sortByAge }; //add all of your function names here that you need for the node mocha tests



function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

// alert(filtered);

// alert(arr); // 5,3,8,1 (not modified)


function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        // remove if outside of the interval
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }

}

arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert(arr); // [3, 1]




function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function (str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    };

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}



function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// console.log(unique(strings)); // Hare, Krishna, :-O


function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}



function sortByAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
}


function copySorted(arr) {
    return arr.slice().sort();
}
arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);
copySorted(sorted)
// alert(sorted);
// alert(arr);

// function getAverageAge(users) {
//     let sum = 0;
//     for (let value of users) {
//         sum += value.age;
//     }
//     return sum / users.length
// }

// let johnas = { name: "John", age: 25 };
// let peter = { name: "Pete", age: 30 };
// let maryam = { name: "Mary", age: 29 };

// let store = [johnas, peter, maryam];

// getAverageAge(store); // 28
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

arr = [1, 2, 3];
shuffle(arr);
//   alert(arr);






