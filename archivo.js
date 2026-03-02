function operacion(){

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var select = document.getElementById("operacion").value;

   switch(select){
    case "suma":
        alert(num1+num2);
        break;
    case "resta":
        alert(num1-num2);
        break;
    case "multiplicacion":
        alert(num1*num2)
        break;
    case "division":
        if (num2===0){
            alert("No se puede dividir entre 0")
        }
        alert(num1/num2)
    

   }
}
