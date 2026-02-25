
function operacion(){
    var num1= document.getElementById("num1").value;
    var num2= document.getElementById("num2").value;
    num1=parseFloat(num1)
    num2=parseFloat(num2)
    var select= document.getElementById("operacion").value;
    if (select=="suma"){
        alert(num1+num2)
    }else if (select == "resta"){
        alert(num1-num2)

    }else if (select == "multiplicacion"){
        alert(num1*num2)
    }else if (select == "division"){
        alert(num1/num2)
    }
}
