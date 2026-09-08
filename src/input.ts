//  Utility type (partial,pick,omit)
// partial
// type User = {
//     id:number,
//     name:string,
//     email:string,
//     age:number
// }
// type UpdatedUser = Partial<User>

// const user:UpdatedUser = {
//     name:"rohit"
// }
// console.log(user);

// pick
// type User = {
//     id:number,
//     name:string,
//     email:string,
//     age:number
// }

// type UserBasicInfo = Pick<User,"name"|"email">

// const user:UserBasicInfo = {
//     name:"rohit",
//     email:"rohit@gmal.com"
// }
// console.log(user);

// Omit

type User = {
    id:number,
    name:string,
    email:string,
    age:number
}

type PublicUser =Omit<User,"age">;

let user2:PublicUser = {
    id:1,
    name:"rohit",
    email:"rohti@fmail.com"
}

console.log(user2);




