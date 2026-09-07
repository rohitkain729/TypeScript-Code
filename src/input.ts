//  arrow function


const greet =(name?:string):string=>{
    return `${name}`;
}
console.log(greet("rohit"));

const square = (a:number)=>a*a;

console.log(square(3));


let num = [1,2,3];

 let newVal=num.map((val)=>{ return val*2});

 console.log(newVal);
 
 let newFil=num.filter((val)=>{return val > 2});

 console.log(newFil);
 
