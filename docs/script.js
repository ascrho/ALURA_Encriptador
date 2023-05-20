
/*Captura los valores en las variables a traves de las clases asignadas a los textArea*/
const textArea = document.querySelector(".ingresaMnesaje");
const mensajeEnc1 = document.querySelector(".mensajeEncriptado1");
const mensajeEnc2 = document.querySelector(".mensajeEncriptado2");

/*Boton de encriptado*/
function btnEncriptar(){

    var content = document.querySelector(".ingresaMnesaje").value;
    if(content.length<1)
    {
        window.alert ("Por favor ingrese el texto que desea encriptar.");
        return true;
    }
   else
   {
    const textoEncriptado1 = encriptar(textArea.value);
    const textoEncriptado2 = textArea.value;

    mensajeEnc1.value = textoEncriptado1;
    mensajeEnc2.value = textoEncriptado2;

    textArea.value = "";
    alert("Mensaje encriptado con exito!!!")
   }
    
};

/*Boton de desencriptado*/
function btnDesEncriptar(){

    var content = document.querySelector(".ingresaMnesaje").value;
    if(content.length<1)
    {
        window.alert ("Por favor ingrese el texto que desea desencriptar.");
        return true;
    }
   else
   {
    const textoEncriptado1 = desencriptar(textArea.value);
    const textoEncriptado2 = textArea.value;

    mensajeEnc1.value = textoEncriptado1;
    mensajeEnc2.value = textoEncriptado2;

    textArea.value = "";
    alert("Mensaje desencriptado con exito!!!")
   }
    
};

/*Boton de copia encriptado*/

/*Permite que al momento de dar click al boton con la clase mainBtnCopiar1, sejecute una accion*/ 
/*
const elemento = document.querySelector('.mensajeEncriptado1');

document.querySelector('.mainBtnCopiar1').addEventListener('click',()=>{

    alert("Texto copiado!!!")
})
*/

function copiarTexto1() {

    var content = document.querySelector(".mensajeEncriptado1").value;
    if(content.length<1)
    {
        window.alert ("Por favor ingrese el texto que desea encriptar.");
        return true;
    }
   else
   {
    let contenido = document.querySelector(".mensajeEncriptado1");
    contenido.select();
    document.execCommand("copy");
    alert("Mensaje copiado con exito!!!")
   }

  }

function copiarTexto2() {

    var content = document.querySelector(".mensajeEncriptado2").value;
    if(content.length<1)
    {
        window.alert ("Por favor ingrese el texto que desea encriptar.");
        return true;
    }
   else
   {
    let contenido = document.querySelector(".mensajeEncriptado2");
    contenido.select();
    document.execCommand("copy");
    alert("Mensaje copiado. Sin embargo, de momento no es posible mantener la fuente, lo sentimos.")
   }
}

/*Para verificar que la matriz esta correcta*/
/*let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"],["é","enter"],["í","imes"],["á","ai"],["ó","ober"],["ú","ufat"]];
console.table(matrizCodigo)*/


/*Matriz con los valores para encriptar*/ 
function encriptar(stringEnctiptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"],["é","enter"],["í","imes"],["á","ai"],["ó","ober"],["ú","ufat"]];

    /*toLowerCase, lleva las vocales a minusculas*/
    stringEnctiptada = stringEnctiptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEnctiptada.includes(matrizCodigo[i][0])){
            stringEnctiptada = stringEnctiptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        };
    };
    
    return stringEnctiptada;
};

function desencriptar(stringDesEnctiptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"],["é","enter"],["í","imes"],["á","ai"],["ó","ober"],["ú","ufat"]];

    /*toLowerCase, lleva las vocales a minusculas*/
    stringDesEnctiptada = stringDesEnctiptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesEnctiptada.includes(matrizCodigo[i][1])){
            stringDesEnctiptada = stringDesEnctiptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        };
    };
    
    return stringDesEnctiptada;
};

