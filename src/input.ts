//  type vs interface

type User = {
    username:string,
    email:string
}
let user1:User = {
    username:"rohit",
    email:"rohit@gmail.com"
}
let user2:User = {
    username:"ravi",
    email:"ravi@gmail.com"
}
console.log(user1.username);
console.log(user2.username);

type ID = string|number;

type Admin = User & {
    role:string
}

type Add = (
    a:number,
    b:number
)=> number;


interface user{
    userName:string,
}

interface Admin2 extends User {
 role:string
}


// interface

interface Product {
    title:string,
    price:number
}
let laptop:Product = {
    title:"macbook",
    price:340000
}
console.log(laptop);





















