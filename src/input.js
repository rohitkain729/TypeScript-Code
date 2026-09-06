"use strict";
let number2 = [1, 2, 3, 4];
let double = number2.map(num => num * 2);
console.log(double); // [2,4,...]
let number = [10, 20, 30, 40];
const numberdata = number.filter((num) => {
    return num > 19;
});
console.log(numberdata);
const user = ["rohit", "ashok", "ravi", "abhi", "rama"];
const userData = user.filter((u) => { return u.startsWith("r"); });
console.log(userData);
let totalPrice = [100, 200, 300];
const totalSum = totalPrice.reduce((sum, price) => { return (sum + price); }, 0);
console.log(totalSum);
