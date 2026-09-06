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


type ID = string | number;
// let userId:ID = 101;
let userId:ID= "rohit";

console.log(userId);


type Person = {
    username:string
}

type Emp = {
    salary :number
}

type Staff = Person & Emp   // intersection

let worker:Staff = {
    username : "rohit",
    salary :40000
}

console.log(worker);





