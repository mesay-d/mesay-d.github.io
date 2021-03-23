// function findLongestWord(arr){
//     let longestWord=0;
//     let longestWords=""
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].length>longestWord){
//             longestWord=arr[i].length;
//             longestWords=arr[i]
//         }
        
//     }
//     return longestWords;
// }
// console.log(findLongestWord(["mesay","honeykl","chimid"]))
// function reverseArrayInPlace(array){
//     let l=array.length;
//     for (let i = 0; i <l/2 ; i++) {
//         let temp=array[i];
//         array[i]=array[l-1-i];
//         array[l-1-i]=temp;
        
//     }
//     return array;

// }
// let b=[1,2,3,4,5]
// console.log(reverse(b))
// function  reverseArray(array){
//     let newArray=[];
//     let l=array.length;
// for (let i = 0; i < l; i++) {
//     newArray.push(array.pop());
// }
// return newArray;

// }
// console.log(reverseArray(["m","h","l","a","c"]))

// function scoreExams(array,correctAnswers){
//     let score=[];
// for (let i = 0; i < array.length; i++) {
//   score.push(compare(array[i],correctAnswers))
// }

// return score;
// }
// function compare(arr,answer){
//     let count=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==answer[i]){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(compare([1,2,3,4],[1,2,3]))
// const studentAnswers = [[1, 1, 2], [2, 1, 2], [3, 1, 3]];
// const correctAnswers = [3, 1, 2];
// console.log(scoreExams(studentAnswers, correctAnswers))

// let age = 10;
//  console.log(age);
//  function output() { 
//      let age = 20; 
//     console.log(age);
// }
//      output();
//       console.log(age);


const student1={studentid:"s101",quizeAnswer:[1,1,2,4]}
const student2={studentid:"s102",quizeAnswer:[2,1,2,2]}
const student3={studentid:"s103",quizeAnswer:[3,1,3,4]}
const key=[3,1,2,4]
const quize=[];
quize.push(student1);
quize.push(student2);
quize.push(student3);
function gradeQuiz(obj,answer){
    for(const n in obj){

    }

}











































