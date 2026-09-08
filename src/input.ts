//  generic in typescript

function printString(value:string){
    return value;
}
function printNum(value:string){
    return value;
}

// generic

function printValue<T>(value:T):T{
    return value;
}

console.log(printValue("rohit"));
console.log(printValue(122));
console.log(printValue(true));


function getData<T>(data:T):T{
 return data;
}

let usname = getData<string>("rohit");
let usage = getData<string>(43);

console.log(usname);
console.log(usage);



function getFirstElement<T>(arr:T[]):T{
 return arr[0];
}

console.log(getFirstElement(["react","node js","ts","angular"]));

interface ApiResponse<T>{
    success:boolean,
    data:T
}

const Response1 :ApiResponse<string> ={
    success:true,
    data:"user found"
}

console.log(Response1);


const Response2 :ApiResponse<{
    name:string,
    age:number
}> ={
    success:true,
    data:{
        name:"rohit",
        age:23
    }
}

console.log(Response2);


function printData3<T>(data:T){
    return data;
}

console.log(printData3([1,2,343]));

function getLength<T extends{length:number}>(item :T){
    return item.length;
}

console.log(getLength([1,2,3,4,]));

interface HasId{
    id:number
}

function printId<T extends HasId>(obj:T){
    console.log(obj.id);
    
}
printId({id:101,name:"rohit"});





























