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


/*
 * ➢ Create 3 objects, student1, student2, student3
➢ property studentId : s101, s102, s103 respectively
➢ property quiz answers: [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
➢push the students into an array, quiz
➢ write a function, gradeQuiz, that takes the quiz array and an array of correct answers, e.g., 
[3,1,2,4] and returns an object that has properties with the names of each studentId and the value 
of the property will be their score on the quiz (one point for each correct answer)
➢ expect { s101: 3, s102: 2, s103: 3 
 *//*
const student1={studentId : "s101",propertyQuize :[1,1,2,4]}
const student2={studentId :  "s102",propertyQuize:[2,1,2,2]};
const student3={ studentId : "s103",propertyQuize:[3,1,3,4]
};
const key =[3,1,2,4]
const quiz=[];
 
quiz.push(student1);
quiz.push(student2);
quiz.push(student3);


 
function gradeQuiz(quizearr,correctarr){
    const report={}
  for(const student of quizearr){
      const score = scoreQuize(student.propertyQuize,correctarr);
      report[student.studentId]=score;
  }
  return report;
    }
 
function scoreQuize(arr,key){
    let count=0;
    for(let i=0;i<arr.length;i++){
if(arr[i]=== key[i]){
    count++;
}
    }
    return count;
}
 
console.log(gradeQuiz(quiz,key))
 
function getaverage(arr){
    let total=0;
    for(const elements of arr){
        total+=sum(elements.propertyQuize)
    }
    return total/arr.length;
}
 
function sum(arr){
    let sum=0;
    for(const elements of arr){
        sum+=elements
}
return sum;
}
console.log(getaverage(quiz))*/


const student1={studentid:"s101",quizeAnswer:[1,1,2,4]}
const student2={studentid:"s102",quizeAnswer:[2,1,2,2]}
const student3={studentid:"s103",quizeAnswer:[3,1,3,4]}
const key=[3,1,2,4]
const quize=[];
quize.push(student1);
quize.push(student2);
quize.push(student3);
function gradeQuiz(array,answer){
    const report={};
    for(const  student of array){
        const score=scoreQuize(student.quizeAnswer,key)
        report[student.studentid]=score;

    }
    return report;

}
function scoreQuize(arr,key){
    Count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==key[i]){
            Count++;
        }
    }
    return Count;
}
console.log(gradeQuiz(quize,key))

function sum(arr){
    let total=0;
    for(const number of arr){
        total+=getaverage(number.quizeAnswer)
    }
    return total;
}

function getaverage(arr){
    let sum=0;
    for(const n of arr){
        sum+=n;
    }
    return sum;
}
console.log(sum(quize))










































