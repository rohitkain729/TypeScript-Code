interface Person {
    username:string,
}

interface Emp{
   salary :number 
}

type staff = Person &Emp;

let workerSaff :staff = {
    username : "rohit",
    salary : 483000
}

console.log(workerSaff);
