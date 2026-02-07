document.getElementById("title").innerHTML = "Temperature Converter C to F";
let c = Number(prompt("Enter the Temperature in Celsius: "));
let f = (c * 9/5) + 32;
document.getElementById("result").innerHTML = "Converted Temperature in Fahrenheit: " +f