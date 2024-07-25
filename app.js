let numeroSecreto =0;// estan en cero por que ya estan en la funcion condiciones iniciales.
let listaDenumerosSorteados= [];
let intentos = 0;
let numeroMaximo= 10;
let intentosAdivinar= 4;
document.querySelector("#bloqueo").removeAttribute("disabled");

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); // puede ser un "p" o h1 hace referencia lo q se va colocar ahi de forma variable
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`aah vez que si sabes. Acertaste el número en ${intentos} ${intentos === 1 ? "vez":"veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled")
        
    } else {
        if(intentos===intentosAdivinar){
            document.querySelector("#bloqueo").setAttribute("disabled","true")
            asignarTextoElemento ("p","Agotastes Los intentos","estas salao")
            asignarTextoElemento ("h1","Gracias por jugar")
            
           } else {
        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento("p","el numero secreto es menor, quien te dijo que era ese")
            
        } else {
            asignarTextoElemento("p","el numero secreto es mayor mantenio")
            
            
        }
        intentos++;
        limpiarCaja(); // °como se va cumplir mientras el usuario no acerte entonces lo colocamos en este else. Al dejar los parentesis vacios funciona para limpiar el input
    }
}
        
    return;
   

}
function limpiarCaja (){
   document.querySelector("#valorUsuario").value= ''; // °este codigo funciona al intrucirlo con el numeral funciona como el gtElemntById 
   
}
function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaDenumerosSorteados);
   
    
    if(listaDenumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "ya se lanzaron todos los numeros")
        asignarTextoElemento("h1","Gracias por jugar")
    } else    {
    if (listaDenumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else{
        listaDenumerosSorteados.push(numeroGenerado)
        return numeroGenerado;
    }
            }
         
}


function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`); 
    // generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    // iniciar la funcion intentos
    intentos=1;
}

function reiniciarJuego(){
limpiarCaja();
// desahabilitar el boton nuevo juego
condicionesIniciales();
//limpiarCaja
document.querySelector("#reiniciar").setAttribute("disabled", "true");


                                    //activar para desactivar el boton, con el setAttribute aagregamos el bloqueo disabled con el true (activo disabled) o false (inactivo disabled) 
}


condicionesIniciales();
