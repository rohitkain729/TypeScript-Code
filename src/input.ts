// Type Narrowing

let value:string | number ;

// value = "Mohit" ;
// value = 100;
// if(typeof value === "string"){
//     console.log(value.toUpperCase());
// }else{
//     console.log(value);
// }

function printVal(value : string |number){
 if(typeof value === "string"){
    console.log(value.toUpperCase());
}else{
    console.log(value.toFixed(2));
}
}
printVal("rohit");
printVal(2);

type Admin = {
    name:string,
    permission:string[]
}

type User = {
    name:string,
    email:string
}

function getInfo(person:Admin|User) {
    if("permission" in person){
        console.log("admin name is "+person.name);
    }else{
        console.log("user name is "+person.name);
    }
}

getInfo({
    name:"rohit",
    permission : ["edit","update"]
})

getInfo({
    name:"priya",
    email : "priya@gmail.com"
})

// instance of class

class Dog{
    bark(){
        console.log('dog is bark');
    }
}

class  Cat{
    meow(){
console.log('Cat is meow');

    }
}


function MakeSound(animal:Dog|Cat){
 if(animal instanceof Dog){
    animal.bark();
 }else{
    animal.meow();
 }
}

MakeSound(new Dog);
MakeSound(new Cat);