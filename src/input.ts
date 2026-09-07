//  interface with function

interface Multiply{
   (a?:number,b?:number):number
}

let multpFn :Multiply=(a,b)=>{return a*b};

console.log(multpFn(2,4));
interface Greeting {
    (username:string):string
}
let greeFn:Greeting = (username)=>{return username };
console.log(greeFn("hi"));

//  resuable function contracts

interface Calcualor{
    (a:number,b:number) : number
}

let addFn:Calcualor=(a,b)=>{return a+b};
let mulFn:Calcualor=(a,b)=>{return a*b};
let divFn:Calcualor=(a,b)=>{return a/b};


console.log(addFn(2,5));
console.log(mulFn(2,5));
console.log(divFn(20,5));








