function operacion(){

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var select = document.getElementById("operacion").value;

    if (select == "suma"){
        alert(num1 + num2);
    }
    else if (select == "resta"){
        alert(num1 - num2);
    }
    else if (select == "multiplicacion"){
        alert(num1 * num2);
    }
    else if (select == "division"){
        if (num2 == 0){
            alert("No se puede dividir entre 0");
            return;
        }
        alert(num1 / num2);
    }
}
