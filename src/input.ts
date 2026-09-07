// .... spread or rest

// rest paramater
function addNumber(...num:number[]){
    console.log(num);   
}
addNumber(10,30,30.22,45);

function  totalPrice(name?:string,
    ...prices:number[]
){
     return `${prices.reduce((sum,price)=>{return sum+price},0)} ${name}`
}
console.log(totalPrice("amit",10,202,303));

// spread operator
let num = [1,3,4,5];
let num2 = [...num,2,4];
console.log(num2);

// spread in object
let user = {
    name:"rohit",
    age:23
}
let updateUSer={...user,age:35,country:"india"};
console.log(updateUSer);









