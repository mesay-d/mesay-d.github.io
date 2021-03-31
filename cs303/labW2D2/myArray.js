
"use strict"


    function myMap(arr,multiplyAll) {
    let newArr=[];
    for(let key of arr){
    let result=multiplyAll(key)
    newArr.push(result)
     }
    return newArr;
     }
     function multiplyAll(elem){
        return elem*elem
         }
    console.log(myMap([1,2,3,4,5], multiplyAll))
    
    function oddValue(elem){
        if(elem%2!==0){
        return true
        }else{
        return false
        }
        
        }
        
        function myFilter(arr,oddValue){
        let newArray=[];
        for(let key of arr){
        if(oddValue(key)){
        newArray.push(key)
        }
        
        }
        return newArray;
        }

        /**
 * 
 * @param {number} a 
 * @param {number} b 
 */
 function sumValue(a,b){
    return a+b;
    }
    /**
    * 
    * @param {array} arr 
    * @param {numuber} sumValue 
    */
    function myreduce(arr,sumValue){
    let sum=0
    for(let key of arr){
    sum=sumValue(sum, key)
    }
    return sum
    }
    console.log(myreduce([1,2,3,4,3],sumValue))