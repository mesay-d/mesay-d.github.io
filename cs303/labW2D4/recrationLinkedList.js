let list = {
    value: "love",
    next: {
      value: "honey",
      next: {
        value: "abab",
        next: {
          value: "mesay",
          next: null
        }
      }
    }
  };
  
  function printRevers (list) {
  
  ; // output the current item
  
    if (list) {
      return  printList(list.next)+list.value+" " // do the same for the rest of the list
    }
    return "";
  
  }
  
  console.log(printList(list)) ;
  function  printList(list){
    let array=[];
    if (list) {
      return  list.value+" "+ printList(list.next) // do the same for the rest of the list
    }
    return "";

  }
console.log(printRevers(list))
// // let node3 = {
// //   name: "p",
// //   value: "This is text in the a paragraph",
// //   children: null
// //  };
// //  let node4 = {
// //   name: "label",
// //   value: "Name", 
// //   children: null
// //  };
// //  let node5 = {
// //   name: "input",
// //   value: "this was typed by a user",
// //   children: null
// //  };
// //  let node2 = {
// //   name: "div",
// //   value: null,
// //   children: [node4, node5]
// //  };
// //  let node1 = {
// //   name: "body",
// //   children: [node2, node3],
// //   value: null,
// //  };

// let list = {
//   name: "mesay",
   
//     next: {
//       name: "daniel",
     
//       next: {
//         name: "chimid",
      
   
//         next: {
//           name: "honey",
       
//           next: {
//               name:null,
//         }
//       }
//     }
//   }};
  
//   function printList(list) {
  
//     console.log(list.name); // output the current item
  
//     if (list.next) {
//       printList(list.next); // do the same for the rest of the list
//     }
  
//   }
  
//   console.log(printList(list));