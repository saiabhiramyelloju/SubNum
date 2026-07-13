const num1 = document.getElementById("input__num1");
const num2 = document.getElementById("input__num2");
const btn = document.getElementById("submitbtn");

btn.addEventListener("click",function(){
    let num1 = Number(document.getElementById("input__num1").value);
    let num2 = Number(document.getElementById("input__num2").value);
    let sub = num1 - num2;
    alert("Number 1 - Number 2 = "+sub);
});