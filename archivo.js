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
        alert(num1/num2)}

   }

function nacimiento(){
    var fecha= document.getElementById("fecha").value;
    var anio_actual=new Date().getFullYear()
    var calculo_fecha=anio_actual-fecha
    if (isNaN(fecha)){

        alert("Ingrese un año valido");
        return ;
    }
    if (fecha>anio_actual){
        alert("Usted todavía no ha nacido")
        return;
    }    

    if (calculo_fecha>=18){
        alert("Usted es mayor de edad")
    }else if (calculo_fecha<18){

        alert("Usted es menor de edad")
    }
    alert(calculo_fecha)

   }

function retirar(){
    var retiro = document.getElementById("retiro").value;
    var saldo_actual=500000
    if (retiro>saldo_actual){
        alert("Fondos insuficientes")
        return;
    }else if(retiro<=0){
        alert("Monto Inválido")
        return;
    }
    alert(saldo_actual-retiro)
}