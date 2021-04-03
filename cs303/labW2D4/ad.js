let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
function reverse(str){
if(str){
    return reverse(str.next)+str.value+""
}
return ""
}
console.log(reverse(list))