


functionmakeBank() {​​​​​​​​
constbank = {​​​​​​​​
transactionsDB: [],
 }​​​​​​​​;
returnfunction(){​​​​​​​​
returnbank
 }​​​​​​​​;
 }​​​​​​​​
letbankObj = makeBank()();
bankObj.transactionsDB = [
 {​​​​​​​​ customerId:1, customerTransactions: [10, 50, -40] }​​​​​​​​,
 {​​​​​​​​ customerId:2, customerTransactions: [10, 10, -10] }​​​​​​​​,
 {​​​​​​​​ customerId:3, customerTransactions: [5, -5, 55] }​​​​​​​​];
 
//here we can find the customer using id
/**
 * 
 * @param{​​​​​​​​id}​​​​​​​​id of the customer
 * @return{​​​​​​​​object}​​​​​​​​ return the customer respect to the id
 */
bankObj.custId=function(id){​​​​​​​​
constfoundCustomer=this.transactionsDB.find(customer=>customer.customerId===id)
returnfoundCustomer;
}​​​​​​​​
//console.log(bankObj.custId(3))
/**
 * 
 * @param{​​​​​​​​id}​​​​​​​​id of the customer
 * @param{​​​​​​​​number}​​​​​​​​amount of customer transaction
 */
bankObj.saveTransaction = function (id, amount) {​​​​​​​​
constfoundCust=this.custId(id);
foundCust.customerTransactions.push(amount)

}​​​​​​​​;
// bankObj.saveTransaction(3,-55);
// console.log(bankObj.custId(3))
/**
 * 
 * @param{​​​​​​​​id}​​​​​​​​id of the customer
 * @return{​​​​​​​​number}​​​​​​​​ return the balance 
 */
bankObj.getBalance = function (id) {​​​​​​​​
constfoundCust=this.custId(id);
letbalance=0;
for(let amountTrans of foundCust.customerTransactions){​​​​​​​​
balance+=amountTrans
 }​​​​​​​​
returnbalance;
 }​​​​​​​​;
//console.log(bankObj.getBalance(3))
 
bankObj.debit = function (id, amount) {​​​​​​​​
let bala=this.getBalance(id);
if(bala<0){​​​​​​​​
console.log("Sorry you don't have sufficient balance")
 }​​​​​​​​else if(amount>bala){​​​​​​​​
console.log("You don,t have suffient balance please change the amount")
 }​​​​​​​​else{​​​​​​​​
amount=amount*-1;
bala+=amount;
this.saveTransaction(id,amount);
 }​​​​​​​​
returnbala;
}​​​​​​​​;
console.log(bankObj.debit(3,20))//35
console.log(bankObj.getBalance(3))
console.log(bankObj.custId(3))
 
bankObj.credit = function (id, amount) {​​​​​​​​
letbalance = this.getBalance(id);
balance += amount;
this.saveTransaction(id, amount);
returnbalance;
}​​​​​​​​
// console.log(bankObj.credit(3,100))//155
// console.log(bankObj.getBalance(3,100))//155
 
/**
 * @returns{​​​​​​​​number}​​​​​​​​ returns sum of all balances
 */
bankObj.bankBalance = function () {​​​​​​​​
let balance=0
for(let customer of this.transactionsDB){​​​​​​​​
balance+=this.getBalance(customer.customerId)
 }​​​​​​​​
return balance;

}​​​​​​​​;

console.log("total balance should be 85: ", bankObj.bankBalance());
bankObj.credit(1, 20);
bankObj.debit(1, 1000);
console.log("total should now be 105: ", bankObj.bankBalance());
 
console.log(bankObj.transactionsDB)
console.log(bankObj.getBalance(3))
console.log(bankObj.bankBalance())
