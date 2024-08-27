const entradaTexto = document.getElementById("entradaTexto");
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById("btnCopiar");
const salidaMensaje = document.getElementById("salidaMensaje");
const muneco = document.getElementById("muneco");
const salidaGuia = document.getElementById("salidaGuia");
const salida = document.getElementById("salida")

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

let reemplazar = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    
const replace = (ajustes) => {
    salidaMensaje.value = ajustes;
    muneco.classList.add("oculto");
    entradaTexto.value = "";
    salidaGuia.style.display = "none";
    btnCopiar.style.display = "block";
    salida.classList.add("ajuste");
    salidaMensaje.classList.add("ajuste");
}

const reset = () => {
    salidaMensaje.value = "";
    muneco.classList.remove("oculto");
    salidaGuia.style.display = "block";
    btnCopiar.style.display = "none";
    salida.classList.remove("ajuste");
    salidaMensaje.classList.remove("ajuste");
    entradaTexto.focus();
}

btnEncriptar.addEventListener("click", () => {
    const texto = entradaTexto.value.toLowerCase()
    if (texto != ""){
        function encriptador(nuevoTexto){
            for (let i = 0; i < reemplazar.length; i++){
                if (nuevoTexto.includes(reemplazar[i][0])){
                    nuevoTexto = nuevoTexto.replaceAll(reemplazar[i][0],reemplazar[i][1]);
                }
            }
            return nuevoTexto
        }
    }
    else{
        alert("No se ha ingresado ningun texto para encriptar");
        reset();
    }
    replace(encriptador(texto));
} );

btnDesencriptar.addEventListener("click", () => {
    const texto = entradaTexto.value.toLowerCase()
    if (texto != ""){
        function desencriptador(nuevoTexto){
            for (let i = 0; i < reemplazar.length; i++){
                if (nuevoTexto.includes(reemplazar[i][1])){
                    nuevoTexto = nuevoTexto.replaceAll(reemplazar[i][1],reemplazar[i][0]);
                }
            }
            return nuevoTexto
        }
    }
    else{
        alert("No se ha ingresado ningun texto para desencriptar");
        reset();
    }
    replace(desencriptador(texto));
    
} );

btnCopiar.addEventListener("click", () => {
    let texto = salidaMensaje;
    // navigator.clipboard.writeText(texto.value); Unicamente PC
    texto.select();
    document.execCommand("copy"); // compatible con PC y móbil
    reset()
});