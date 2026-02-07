document.getElementById("title").innerHTML = "Grade";
let mark = Number(prompt("Enter the mark: "));

if(mark >= 90){
  document.getElementById("result").innerHTML = "Grade: A";
} else if(mark>=80){
  document.getElementById("result").innerHTML = "Grade: B";
} else if(mark >= 60){
  document.getElementById("result").innerHTML = "Grade: C";
} else if(mark === 0){
  document.getElementById("result").innerHTML = "Fail";
} else {
  document.getElementById("result").innerHTML = "Grade: D";
}