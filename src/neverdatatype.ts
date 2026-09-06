// Never Data Type
// function throwError(message:string):never{
//     throw new Error(message);
// }

// throwError("404");

// function infinityLoop():never{
//     while(true){
//         console.log("running...");    
//     }
// }
// infinityLoop();

function greet():void{
    console.log("hello");
}

const result=greet();
console.log(result); //undefined
