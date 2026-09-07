//  function overloading

function add(
    a:any,
    b:any
):number{
    return a+b;
}


// function show(
//     value:string
// ):void;


// function show(
//     value:any
// ):void;

// function search(id:string):string{
// }
// function search(username:string):string{
// }

//  practical use
function search(value:any):string{
  if(typeof value === "string"){
        return `username: ${value}`
  }else{
    return `id: ${value}`
  }
}

console.log(search(343));
