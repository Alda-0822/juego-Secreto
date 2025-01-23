/*let titulo = document.querySelector('h1');  //vinvular una etiqueta de html con javascript
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';

function intentoUsuario(){
    alert('Click desde el botón');
}         Forma explicita
*/

// Hoisting / reducción de código
let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);  //vinvular una etiqueta de html con javascript
    elementoHTML.innerHTML =texto;
    return;
}
function verificarIntento(){
    let numeroUsuario = document.getElementById('valorUsuario').value; //Si mas etiquetas iguales

    if (numeroUsuario == numeroSecreto){
    asignarTextoElemento('p',`Acertaste el número en ${numeroIntentos} ${(numeroIntentos === 1) ? 'intento' : 'intentos' }`);
    document.getElementById('reiniciar').removeAttribute('disabled');    

    }
    else {

        if (numeroUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }
        else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        numeroIntentos++;
        limpiarCaja();
            }
    return;
}
function limpiarCaja(){
   valorCaja = document.querySelector('#valorUsuario').value = '';
   
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; //pare no repetir numero en nuevo juego
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')
    }
    else{
    
    if (listaNumerosSorteados.includes(numeroGenerado)){
    
        return generarNumeroSecreto();
    
    }
    else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
     }
    }
}
       

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto'); 
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
}
function reiniciarJuego(){
// limpia la caja, Indicar intervalo de números, Generar nuevo número aleatorio,deshabilitar boton juego nuevo y reiniciar número de intentos
limpiarCaja ();
condicionesIniciales ();
document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();