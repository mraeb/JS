document.getElementById("title").innerHTML = "Simple Interest";
let p = Number(prompt("Enter the principal amount: "));
let r = Number(prompt("Enter the rate of interest: "));
let t = Number(prompt("Enter the time in year: "));
let si = (p*r*t)/100;

document.getElementById("result").innerHTML = "Simple Interest of given amount is "+si;