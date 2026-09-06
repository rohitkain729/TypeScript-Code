type Username=string;
type age=number;

let myname:Username = "rohit";
let myage:age = 57;

console.log(myname);
console.log(myage);



// let users :{
//     username:string,
//     age:number
// }

type Users = {
     username:string,
    age:number
}

let user2:Users={username:"rohit",age:44};
console.log(user2);

type AddFunction = (
    a:number,
    b:number
) =>number;

let add:AddFunction = (x,y)=>{return x+y};

console.log(add(5,7));


