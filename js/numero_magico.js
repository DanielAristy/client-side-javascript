var max = 100;
var min = 1;

var numero_magico = Math.random() * (max - min) + min;
numero_magico = Math.floor(numero_magico)

console.log(numero_magico)
var mensaje = "Ingresa el numero para adivinar el número mágico";

while(true){
    var numero_usuario = prompt(mensaje, "0");
    numero_usuario = parseInt(numero_usuario);

    if(numero_usuario === numero_magico){
        alert("Ganaste!! Adivinaste el numero mágico")
        break;
    }else if (numero_usuario === 0){
        break;
    }else if (numero_usuario > numero_magico){
        alert("El numero que ingresaste es mayor al numero mágico")
    }
    else if (numero_usuario < numero_magico){
        alert("El numero que ingresaste es menor al numero mágico")

    }
}