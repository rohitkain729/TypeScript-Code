const inputField = document.getElementById("username") as HTMLInputElement;


const button = document.getElementById("btn") as HTMLButtonElement;

button.addEventListener("click",()=>{
   
const value = inputField.value;

if(value.trim()===""){
    alert("please enetr name");
}else{
    console.log(value);
    
}

})


