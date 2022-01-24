function sum(){
    var x = parseFloat(document.getElementById("num1").value)+parseFloat(document.getElementById("num2").value);
    document.getElementById("result").value=x;
}
function multiply(){
    var x = parseFloat(document.getElementById("num1").value)*parseFloat(document.getElementById("num2").value);
    document.getElementById("result").value=x;
}
function Subtract(){
    var x = parseFloat(document.getElementById("num1").value)-parseFloat(document.getElementById("num2").value);
    document.getElementById("result").value=x;
}
function Dividing(){
    var x = parseFloat(document.getElementById("num1").value)/parseFloat(document.getElementById("num2").value);
    document.getElementById("result").value=x;
}