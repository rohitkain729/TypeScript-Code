class User{
    name="rohit"
}
const user = new User();
console.log(user);

class User2{
    name:string;      
    age:number
    constructor(name:string,age:number){
      this.name =name;
      this.age = age;
    }
}
const u2 = new User2("rohit",23);
const u3 = new User2("IIhit",53);
console.log(u2);
console.log(u3);


class User3{
    constructor(
        public name:string,
        public age:number
    ){}
}

const u4 = new User3("rohit",83);

console.log(u4);











