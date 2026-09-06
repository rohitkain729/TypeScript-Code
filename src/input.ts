type Person ={
    username:string
}

type  Emp = {
    salary:number
}

type staff = Person & Emp;


type User = {
    username:string
}

type Admin = {
  permission :string [] 
}
type AdminUser = User & Admin;

let admin: AdminUser = {
    username :"rohit",
    permission : ["read","write"]
}
console.log(admin);



