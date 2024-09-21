function opcion(numero){
    if(numero==1){
        return "PIEDRA";
    }else if(numero==2){
        return "PAPEL";
    }else if(numero==3){
        return "TIJERA";
    }
}


function ganador(usuario, computadora){
    if(usuario!=computadora){
        if(usuario=="PIEDRA"&&computadora=="TIJERA")
            console.log("FELICIDADES! Has ganado!");
        else if(usuario=="TIJERA"&&computadora=="PAPEL")
            console.log("FELICIDADES! Has ganado");
        else if(usuario=="PAPEL"&&computadora=="PIEDRA")
            console.log("FELICIDADES! Has ganado");
        else
            console.log("HAS PERDIDO!");
    }else{
        console.log("EMPATE");
    }
}

let opcionUsuario=prompt("Ingrese el numero correspondiente a la opcion: 1.PIEDRA 2.PAPEL 3.TIJERA");
let usuario=opcion(opcionUsuario);
let computadora=opcion(Math.floor((Math.random() * 3) + 1));

console.log("El usuario ha escogido: "+usuario);
console.log("La computadora ha escogido: "+computadora);
console.log(ganador(usuario, computadora));
