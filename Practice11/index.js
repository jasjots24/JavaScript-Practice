//let a ='HELLO';

/*function nums(){
    console.log(a);
    let a ='hi';
}
nums();
console.log(a);  */

let nums = [1,2,3,4,];

/*let result = nums.map((nums)=>{
return nums*2;
}) 
console.log(result);*/ 

/*let result = nums.reduce((acc,curr,i,arr)=>{
    return acc+curr;
},0)
console.log(result);  */

// FIRST CLASS FUNCTIONS
function fn1(nums){
    return nums*nums;

}

function fn2(fn){
    console.log(fn(6));
}
fn2(fn1);