//  ACCESS MODIFIERS

//  private
// class User{
//     private name:string

//    constructor(name:string){
//     this.name =name;
//    }

//    public getName(){
//      return this.name;
//    }

// }

// console.log(new User("rohit").name);
// console.log(new User("rohit").getName());

//  protected

class Emp{
    protected salary:number;

    constructor(sal:number){
        this.salary=sal;
    }
}

class Develp extends Emp{
    showSal(){
        console.log(this.salary);
    }
}

new Develp(4000).showSal();


