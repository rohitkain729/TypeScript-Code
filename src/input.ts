//  conditional type
// type Result<T> = T extends string ?string :number;

// type CheckString<T> = 
//   T extends string ? "yes":"no"
//   type Result1 =CheckString<string>
//   type Result2 =CheckString<number>
//   const result : Result1 = "No";
//   console.log(result);

// type IsAdmin<T> = 
// T extends "admin" ? true :false;

// type User1 = IsAdmin<"admin">
// type User2 = IsAdmin<"user">


interface Admin {
    permission:string[]
}
interface Emp {
    department:string
}
type UserType<T>= 
T extends Admin ? "Admin":"Emp User";

type result1 =UserType<Admin>;
type result2 =UserType<Emp>;

function getUser(){
    return {
        name:"rohit",
        age:30
    }
}

type GetUserType<T>= 
T extends (...args:any[]) =>infer R?R:never 

type User  = GetUserType<typeof getUser>;








  
  