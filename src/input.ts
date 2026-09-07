// paramater ? : type

function welcome(
    age?:number,
    username:string = "rohit",
    country?:string
){
    console.log(`hi bro ${username} ${age} ${country}`);
}

welcome(56,"ashok","india");


