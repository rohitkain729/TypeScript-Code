// ABSTRACT CLASSES

// abstract class  Animal {
    
//     abstract makeSound():void;
    
//     eat(){
//         console.log("animal eating");
        
//     }
// }
// class Dog extends Animal{
//     makeSound(): void {
//         console.log("woof woof");
        
//     }
// }
// // const an = new Animal();
// const dog = new Dog();
// dog.makeSound();

abstract class Emp{
    constructor(){}
    abstract CalcSal():string;
}

class Dev extends Emp{
    CalcSal(): string {
        return `salary is 50000`
    }
}
const dev = new Dev();
console.log(dev.CalcSal());




