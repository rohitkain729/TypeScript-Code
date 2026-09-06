// arrays

let number = [10,30,40];

console.log(number);

let marks:number[] = [90,32,67];
console.log(marks);

// Array<Type>

let user : Array<string> = [
    "Rohit",
    "Verma"
]
console.log(user);


let price:number[] = [100,3403,438];
let cities:string[] = ["Delhi","Mumbai"];
let statusCode:boolean[] = [true,false,true];


//push pop

price.push(444);
console.log(price);

let fruit:string[] = ["Apple"];
fruit.push("mango");
console.log(fruit);
console.log(fruit.length);
console.log(fruit.indexOf("mango"));


let data:(string | number)[]= [
    "rohit",
    24,
    "delhi"
]
data.push("meeta");
data.push("Jag jivan nagar");
console.log(data);












