//Create a variable name and show it inside a <p> tag using JavaScript.
document.getElementById("title").innerHTML = "Variable";
let result = document.getElementById("result");
let name = "Balaji S" ;
let para = document.createElement("p");
para.id = "name";
result.appendChild(para);
document.getElementById("name").innerHTML = name;