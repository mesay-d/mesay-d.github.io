"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */ 
//module.exports = {maxOfThree, sum, multiply };  //add all of your function names here that you need for the node 
//exports.maxOfThree = maxOfThree;


/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c){ 
    if (a > b && b > c) {return a;}
    if (a > c && c > b) {return a;}
    if (b > a && a > c) {return b;}
    if (b > c && a > c) {return b;}
    if (c > a && a > b) {return c;}
    if (c > b && b > a) {return c;}

 
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let tot = 0;
    for (const element of arr){
        tot += element;
    }

    return tot;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr){
    let tot = 1;
    for(const n of arr){
        tot*=n;
    }

    return tot;

}
/**
 * 
 * @param {Array} arr of words
 * @returns{string} longest word 
 */
 function findLongestWord(arr){
    let longestWord=0;
    let longestWords=""
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length>longestWord){
            longestWord=arr[i].length;
            longestWords=arr[i]
        }
        
    }
    return longestWords;
}
/**
 * 
 * @param {array} array it array
 * @returns {array}
 */
function  reverseArray(array){
    let newArray=[];
    let l=array.length;
for (let i = 0; i < l; i++) {
    newArray.push(array.pop());
}
return newArray;

}
/**
 * 
 * @param {array} array 
 * @returns {array}
 */
function reverseArrayInPlace(array){
    let l=array.length;
    for (let i = 0; i <l/2 ; i++) {
        let temp=array[i];
        array[i]=array[l-1-i];
        array[l-1-i]=temp;
        
    }
    return array;

}
/**
 * 
 * @param {array} array 
 * @param {array} correctAnswers 
 * @returns {array}result;
 */
function scoreExams(array,correctAnswers){
    let score=[];
for (let i = 0; i < array.length; i++) {
  score.push(compare(array[i],correctAnswers))
}

return score;
}
/**
 * 
 * @param {array} arr 
 * @param {array} answer 
 * @returns {number}
 */
function compare(arr,answer){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==answer[i]){
            count++;
        }
    }
    return count;
}