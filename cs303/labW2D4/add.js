// let list = {
//     value: "mesay",
//     next: {
//       value: "honey",
//       next: {
//         value: "luwam",
//         next: {
//           value:"chimid" ,
//           next: null
//         }
//       }
//     }
//   };
  
//   function printRevers (list) {
//     if (list) {
//       return printRevers(list.next)+list.value // do the same for the rest of the list
//     }
//     return "";
  
//   }
//   function  printList(list){
    
//     if (list) {
//       return  list.value+ printList(list.next) // do the same for the rest of the list
//     }
//     return "";

//   }
//   console.log(printList(list))
//   console.log(printRevers(list))
// const numArray = [5, 44, 1, 33];
// let smallest=numArray.reduce((min,accum)=>accum<min?accum:min,)
// console.log(smallest)
const numArray = [5, 44, 1, 33];
let maxi=numArray.reduce((max,accum)=>accum>max?accum:max,-10000000)
console.log(maxi)
