function add() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let sum = num1 + num2;
  document.getElementById("show").innerHTML =
    "The total of two numbers is " + sum;
}

function sub() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let sum = num1 - num2;
  document.getElementById("show").innerHTML =
    "The total of two numbers is " + sum;
}

function mul() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let sum = num1 * num2;
  document.getElementById("show").innerHTML =
    "The total of two numbers is " + sum;
}

function div() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let sum = num1 / num2;
  document.getElementById("show").innerHTML =
    "The total of two numbers is " + sum;
}

function mod() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let sum = num1 % num2;
  document.getElementById("show").innerHTML =
    "The total of two numbers is " + sum;
}
