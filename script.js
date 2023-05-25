/*Inputs*/
const texto=document.querySelector(".texto");
const mensaje=document.querySelector(".mensaje");

function btnEncriptado(){
	const encriptado=encriptar(texto.value);
	mensaje.value=encriptado;
	texto.value="";
	mensaje.style.backgroundImage="none";
}

function btnDesencriptado(){
	const desencriptado=desencriptar(texto.value);
	mensaje.value=desencriptado;
	texto.value="";
}

function encriptar(stringEncriptar){
	var cambio = [["e","enter"], ["i","imes"],["a","ai"], ["o","ober"], ["u","ufat"]];
	stringEncriptar = stringEncriptar.toLowerCase();

	for(var i=0; i<cambio.length;i++){
		if(stringEncriptar.includes(cambio[i][0])){
			stringEncriptar = stringEncriptar.replaceAll(cambio[i][0] , cambio[i][1]);
		}
	}
	return stringEncriptar;
}

function desencriptar(stringDesencriptado){
	var cambio = [["e","enter"], ["i","imes"],["a","ai"], ["o","ober"], ["u","ufat"]];
	stringDesencriptado = stringDesencriptado.toLowerCase();

	for(var i=0; i<cambio.length;i++){
		if(stringDesencriptado.includes(cambio[i][1])){
			stringDesencriptado = stringDesencriptado.replaceAll(cambio[i][1] , cambio[i][0]);
		}
	}
	return stringDesencriptado;
}

function copiar(){
	mensaje.select();
	document.execCommand("copy");
}
