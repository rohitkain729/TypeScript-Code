// Mapped type

type user = {
    name:string,
    age:number
}

// type OptionalUser = {
//     [key in keyof user]?:user[key]
// }

// const user:OptionalUser={
//     name:"rohit",
//     age:23
// }

// type ReadonlyUser = {
//     readonly [key in keyof user] : user[key]
// }

// let user2 : ReadonlyUser = {
//     name:"rohit",
//     age:34
// }

// user2.name = "preeti"; // cannot be changed


type BooleanUser = {
    [key in keyof user] : boolean
}

const userStatus:BooleanUser ={
    name :true,
    age:false
}
console.log(userStatus);













