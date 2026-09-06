function greet(username:string):void{
    console.log(`hi  ${username}`);
}
// greet("rohit");


function greet2(username:string):string{
    return `hi ${username}`;
}
const result= greet2("rohit");

console.log(result);

//optional parameter
function  greetUser(username?:string){
    console.log(username);
}

function greetuser2(
    age?:number,
    username?:string
){
 console.log(age,username);    
}
greetuser2(24,"rohit");

// default parameter
function greetuser3(
    age: number =54,
    username:string = "ashok"
){
 console.log(age,username);    
}
greetuser3();






