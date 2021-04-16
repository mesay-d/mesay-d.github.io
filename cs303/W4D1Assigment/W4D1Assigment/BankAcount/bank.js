"use strict"

const { Account } = require("./account");
const { SavingsAccount } = require("./savingsaccount");
const { CheckingAccount } = require("./checkingaccount");
class Bank{
    static nextNumber=0;
    constructor(){
        Bank.nextNumber++;
        this. _account=[];
    }
    addAccount(){
       this._account.push(new Account(Bank.nextNumber++))
    }
    addSavingsAccount(interest){
        this._account.push(new SavingsAccount(Bank.nextNumber++,interest))
    }
    addCheckingAccount(overdraft){
        this._account.push(new CheckingAccount(Bank.nextNumber++,overdraft))
    }

    closeAccount(number){
        let index=this._account.findIndex((item)=>item._number===number)
        this._account.splice(index,1)
    }
    accountReport(){
      let accountReport=""  
      for(let account of this._account ){
        accountReport+=account.toString()+"\n"
      }
      return accountReport;
    }
}

exports.Bank = Bank;
//  let bank=new Bank()
//  bank.addAccount()
//  bank.addCheckingAccount(500)
// bank.addSavingsAccount(5)
// console.log( bank.accountReport())
// console.log(new SavingsAccount().toString())
