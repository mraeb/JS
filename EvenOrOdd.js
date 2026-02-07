document.getElementById("title").innerHTML = "Even Or Odd";
let num = Number(prompt("Enter the number to check even or odd: "));
if (num>0){
  if(num%2 == 0){
  document.getElementById("result").innerHTML = "The given number "+num+" is an even number";
} else {
  document.getElementById("result").innerHTML = "The given number "+num+" is an odd number";
}
} else {
  document.getElementById("result").innerHTML = "Enter the number greater than 0..."
}
