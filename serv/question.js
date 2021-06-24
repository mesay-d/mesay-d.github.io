Array.prototype.even=function(){
    // let arr1=[];
    // for( let i=0;i<this.length;i++){
    //    if(this[i]%2==0){
    //        arr1.push(this[i])
    //    }
    // }
    
    // return arr1;
    return this.filter(a=>a%2==0)
}
let c=[1,2,3,4,5,6,7,8].even();
console.log(c)
Array.prototype.odd=function(){
    // let arr1=[];
    // for( let i=0;i<this.length;i++){
    //    if(this[i]%2!==0){
    //        arr1.push(this[i])
    //    }
    // }
    
    // return arr1;
    return this.filter(a=>a%2!==0)
}
let d=[1,2,3,4,5,6,7,8].odd();
console.log(d)