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




