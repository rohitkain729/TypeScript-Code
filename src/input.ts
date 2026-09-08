//  OOPS : Static properties and methods

// class MathUtils{
//     static appName= "Calculator";
// }

// console.log(MathUtils.appName);

class Company{
   static compnanyName = "ROhit Decodes";
}

// const comp = new Company();
console.log(Company.compnanyName);

class MathUtils{
  static add(
    a:number,
    b:number
  )  {
    return a+b;
  }
}
console.log(MathUtils.add(2,3));

class Users{
    static appName="codeing TS";
    name:string;

constructor(name:string){
    this.name=name;
}}

const user = new Users("rohit");
console.log(user);
console.log(Users.appName);



