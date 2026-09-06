// tuples
let user:[string,number] = ["rohit",34];
console.log(user);

let numbersData:number[] = [1,2,3,4];
let empData:[string,number]=["rohit",34000];
let [username,salary] = empData;
console.log(username);
console.log(salary);


function getUser():[string,number]{
    return ["rohit",343000]
}

console.log((getUser()));
