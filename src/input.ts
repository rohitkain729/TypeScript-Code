let add:(a:number,
    b:number,) => number


function greet(username:string):void{
console.log(username);
 }  
 greet("rohit");

 function add2(a:number,b:number):number{
    return a+b;
 }
 console.log(add2(2,5));

 function multiple(a:number,b:number):number{
    return a*b;
 }
console.log(multiple(2,4));

let  subtract :(x:number,y:number)=>number;

subtract=(a,b)=>{
    return a-b;
}
console.log(subtract(20,4));


// call back

function processData(
    callback:(
        value:number
    ) =>void
   )
    {
        callback(100)
    }
processData((num)=>{console.log(num);
})

function Calculate( a:number,
    b:number,
    operator:(x:number,y:number) =>number){
    return operator (a,b)
}

let result = Calculate (
    10,20,(x,y)=>x+y
)
console.log(result);






























 