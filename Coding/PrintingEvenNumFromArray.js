let arr=[1,2,3,4,5,6,7,8,9,10];
let new_arr=arr.filter((event)=>{
    return event%2==0;
})
console.log(new_arr);