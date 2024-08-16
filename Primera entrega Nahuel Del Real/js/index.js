// let NombreDeUsuario = "Alejandro"
// console.log(nombreDeUsuario);



// const NUMERO = 2;
// const LETRA = "A"
 const ESPACIO =" "

// console.log(NUMERO)
// console.log(LETRA)
// console.log(ESPACIO)



const textoPrevio ="El Nombre Ingresado es: ";

let nombreCompleto = prompt("Ingrese su Nombre");
console.log(nombreCompleto);

alert(textoPrevio + ESPACIO + nombreCompleto );



const edadDeLaMoto = prompt("ingrese edad del veiculo: ");

if (edadDeLaMoto >= 2018) {
    alert("Puede Vender.!")
}else {
    alert("Es menor a " + 2018 + " No Compramos.!" )
}

const preciodearranque = 4.000000;
const ingreseUnValor = prompt("Ingrese un numero: ");

if (ingreseUnValor <= 0){
    console.warn("No se puede ingresar un valor negativo o igual a 0")
} else if(ingreseUnValor < preciodearranque){
    console.log("El numero ingreado es menor a precio de arranque")
}else if(ingreseUnValor == preciodearranque){
    console.log("El numero ingreado es igual a precio de arranque APROBADO")

const cuotas = prompt("ingrese la cantidad de cuotas: ")

    switch (cuotas) {
       case "3":
           console.log(`el valor de las cuotas es: ${ingreseUnValor/3}`);
           break;
       case "6":
           console.log(`el valor de las cuotas es: ${ingreseUnValor/6}`);
           break;
        case "9":
           console.log(`el valor de las cuotas es: ${ingreseUnValor/9}`);
       break;
       default:
        console.log(`el valor de las cuotas es: ${ingreseUnValor/12}`);
        break
    }

}else {
    console.error("El dato ingresado no es un numero.!")
}

 
