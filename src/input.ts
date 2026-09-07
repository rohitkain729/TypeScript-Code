// type FunctionNames={
//     (
//         parameter:type
//     ):Return Type
// }

type Multiply = {
    (
        x:number,
        y:number
    ): number;
}

let multiplyNUmber:Multiply = (x,y) => x*y;

console.log(multiplyNUmber(2,6));


// by interface 
interface Multiple2  {
    (
        x:number,
        y:number
    ):number
}
let InteMultipl:Multiple2= (x,y)=>{return x*y};

console.log(InteMultipl(3,7));


interface LoginFun{
    (email:string,
password:string
    ):boolean
}

let Login:LoginFun=(email,password)=>{return password === "123" ? true:false};

console.log(Login("rkrfo@gmail.com","123"));





