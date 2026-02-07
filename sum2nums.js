document.getElementById("title").innerHTML = "Sum Of Two Numbers";
let num1 = Number(prompt("Enter the first number: ") || 0);
let num2 = Number(prompt("Enter the second number: ") || 0);
// let sum = Number(num1)+Number(num2);
let sum = num1 + num2;
console.log("Sum of two numbers: " + sum);
document.getElementById("result").innerHTML = "Sum of two numbers: " + sum;

document.getElementById("result").innerHTML = "Sum: " + sum;