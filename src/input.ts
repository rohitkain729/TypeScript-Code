//  GETTER AND SETTER
class User{
    private _name:string = "";
  
    get name(){
        return this._name;
    }
    set name(name:string){
        if(name.length<3){
            console.log("name must be atleast 3 charcater");
        }else{
            this._name = name;
        }
    }
}

const user = new User();
user.name="rohit";
console.log(user.name);



 
