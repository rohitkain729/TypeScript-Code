// union types
// multiple handler
let id: string|number;  // union
id=101;
id="rohit";
// id=true; // not valid
console.log(id);

function printId(id:string|number){
console.log(id);
}
printId(100);
printId("preety");

//type narrowing
function printData(data: string|number){
    if(typeof data === "string"){
        console.log(data.toUpperCase());
    }else{
        console.log(data);
    }
}
printData("rohit");
printData(44);
