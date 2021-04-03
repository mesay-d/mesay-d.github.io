let list = {
    value: "mesay",
    next: {
      value: "honey",
      next: {
        value: "luwam",
        next: {
          value:"chimid" ,
          next: null
        }
      }
    }
  };
  
  function printRevers (list) {
  

  
    if (list) {
      return printRevers(list.next)+list.value+"" // do the same for the rest of the list
    }
    return "";
  
  }
  
  
  function  printList(list){
    
    if (list) {
      return  list.value+""+ printList(list.next) // do the same for the rest of the list
    }
    return "";

  }

class TreeNode {
  constructor(value) {
      this.value=value;
      this.descendents = [];
  }
}

const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');

abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

function printName(node) {
  
  // if (node.descendents === []) {
  //     return "";
  // }
  // else {
    console.log(node.value)

      for (let descendent of node.descendents) {
        
         printName(descendent);
      }
 // }
  //return ""
}

console.log(printName(abe));

///////////////////////////////////////

function contains(node, target) {
    
  // if (node.descendents === null) {
  //     if (node.value === target) {
  //         return true;
  //     } else {
  //         return false;
  //     }
  // } else { 
  //     let childResult = false;
  //     if (node.value === target) {
  //         return true;
  //     }
  //     for (let child of node.descendents) {
  //         childResult = contains(child, target);
  //         if (childResult === true) {
  //             return true;
  //         }
  //     }
  //     return false; 
      
  // }
  if(node.next===null){
    
  }
}
console.log(contains(homer, "Abe"));
console.log(contains(homer, "Maggie")); 

     