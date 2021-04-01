"use strict"
//module.exports = { sumNumber,factorialNumber,fabonnacci };
/**
 * 
 * @param {number} num 
 * @return {number} number
 */
function sumNumber(num){
    if(num===1){
        return num;
    }else{
        return num + sumNumber(num-1)
    }
}
/**
 * 
 * @param {number} num
 * @return {number} number
 */
function factorialNumber(num){
    if(num<1){
        num=Math.abs(num)
    }
    if(num===1){
        return num;
    }else{
        return num * factorialNumber(num-1)
    }
  
}
/**
 * 
 * @param {number} num 
 * @return {number} number
 */
function fabonnacci(num){
    if(num<2){
       return num
    }else{
        return fabonnacci(num-1)+ fabonnacci(num-2)
    }
}


