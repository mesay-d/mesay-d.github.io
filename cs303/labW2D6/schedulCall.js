
/**
 * 
 * @param {number} start 
 * @param {number} end 
 */
let printNumbers2 = (start, end) => {
    setTimeout(() => console.log(start), 1000);
    start < end && setTimeout(printNumbers2, 1000, start + 1, end);
   }
    
   printNumbers(5, 10);
// the setTimeout will print the increamented number recursively.
function printNumbers(from, to) {
    let current = from;
  
    setTimeout(function go() {
      console.log(current);
      if (current < to) {
        setTimeout(go, 1000);
      }
      current++;
    }, 1000);
  }
  
  // usage:
  printNumbers(5, 10);
  // function printNumbers1(from, to) {
  //   let current = from;
  
  //   function go() {
  //     console.log(current);
  //     if (current == to) {
  //       clearInterval(timerId);
  //     }
  //     current++;
  //   }
  
  //   go();
  //   let timerId = setInterval(go, 1000);
  // }
  
  // printNumbers1(5, 10);

let i = 0;

setTimeout(() => console.log(i), 100); // 100000000

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
}
/**
 *   Any setTimeout will run only after the current code has finished.

The i will be the last one: 100000000.

 */
/**
 * 2. Recall the bank question from the first exam. The transactionsDB is publicly accessible to any
code that has access to the bank object. Write a makeBank function that will encapsulate and
return the bank object. Make the transactionsDB private by making it a local variable in the
makeBank function instead of a property on the bank object
 */

/**
 * @return {object} return the object or the banks
 */
function makeBank() {
    const bank = {
    transactionsDB: [],
    };
    return function(){
    return bank
    };
   }
   let bankObj = makeBank()();
     bankObj.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }];

//here we can find the customer using id
/**
 * 
 * @param {id} id of the customer
 * @return {object} return the customer respect to the id
 */
bankObj.custId=function(id){
    const foundCustomer=this.transactionsDB.find(customer=>customer.customerId===id)
    return foundCustomer;
}
//console.log(bankObj.custId(3))
/**
 * 
 * @param {id} id of the customer
 * @param {number} amount of customer transaction
 */
bankObj.saveTransaction = function (id, amount) {
  const foundCust=this.custId(id);
  foundCust.customerTransactions.push(amount)
  
};
//  bankObj.saveTransaction(3,-55);
//  console.log(bankObj.custId(3))
/**
 * 
 * @param {id} id of the customer
 * @return {number} return the balance  
 */
bankObj.getBalance = function (id) {
    const foundCust=this.custId(id);
    let balance=0;
    for(let amountTrans of foundCust.customerTransactions){
        balance+=amountTrans
    }
    return balance;
    };
    //console.log(bankObj.getBalance(3))

bankObj.debit = function (id, amount) {
  let bala=this.getBalance(id);
  if(bala<0){
      console.log("Sorry you don't have sufficient balance")
  }else if(amount>bala){
      console.log("You don,t have suffient balance please change the amount")
  }else{
    amount=amount*-1;
      bala+=amount;
      this.saveTransaction(id,amount);
  }
 return bala;
};
console.log(bankObj.debit(3,20))//35
console.log(bankObj.getBalance(3))
console.log(bankObj.custId(3))

bankObj.credit = function (id, amount) {
    let balance = this.getBalance(id);
    balance += amount;
    this.saveTransaction(id, amount);
    return balance;
}
// console.log(bankObj.credit(3,100))//155
// console.log(bankObj.getBalance(3,100))//155

/**
 * @returns {number}  returns sum of all balances
 */
bankObj.bankBalance = function () {
      let balance=0
    for(let customer of this.transactionsDB){
       balance+=this.getBalance(customer.customerId)
    }
  return balance;

};

 console.log("total balance should be 85: ", bankObj.bankBalance());
bankObj.credit(1, 20);
bankObj.debit(1, 1000);
console.log("total should now be 105: ", bankObj.bankBalance());

console.log(bankObj.transactionsDB)
console.log(bankObj.getBalance(3))
console.log(bankObj.bankBalance())