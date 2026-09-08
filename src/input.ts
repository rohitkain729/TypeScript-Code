// record type
// Record<keys,valueType>

type UserRole= {
    admin:string,
    user:string,
    guest:string
}

type UserRole2 = Record<
  "admin"|"user"|"guest"
,string>

const roles:UserRole = {
    admin:"Full Access",
    user:"Limited Access",
    guest:"Read only"
}
console.log(roles);

type StudentMarks = Record<string,number>;

const marks : StudentMarks = {
    Mohit:200,
    rohit:389,
    amit:289
}
console.log(marks);

type UserType = {
    name:string,
    age:number
}

type Users = Record<string,UserType>

const user1:Users = {
     "user1":{
        name:"rohit",
        age:20
     },
     "user2" :{
        name:"ashok",
        age:32
     }
}

console.log(user1);














