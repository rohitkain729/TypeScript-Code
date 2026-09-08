// //  Inheritance

// class Animal {
//     name:string
//   constructor(name:string){
//      this.name =name;
//   }
//   eat(){
//     console.log(`${this.name} i am eating `);
//   }
// }

// class Dog extends Animal{
//     bark(){
//         console.log(`woff woff`);
//     }
// }

// const dog = new Dog("tommy");
// dog.eat();
// dog.bark();

// class Animal{
//     constructor(public name:string){
//     }
// }
// class Dog extends Animal{
//     constructor(name:string,public breed:string){
//         super(name);
//     }
// }
// let dog = new Dog("tommy","breed:labr dor");
//  console.log(dog);
 
class Emp {
    protected salary:number;
    constructor(
        salary:number
    ){
       this.salary =salary;
    }
}

class Dev extends Emp{
    showSal(){
        console.log(this.salary);
        
    }
}

let deve = new Dev(4000);
deve.showSal();









