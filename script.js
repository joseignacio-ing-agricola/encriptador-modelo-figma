// Función para encriptar el texto ingresado
function encriptar() {
  var texto = document.getElementById("inputtexto").value.toLowerCase(); // Obtener el texto del input y convertirlo a minúsculas
  // Sustituir cada vocal con su respectiva "encriptación"
  var txtcifrado = texto.replace(/e/igm,"enter");
  var txtcifrado = txtcifrado.replace(/o/igm,"ober");
  var txtcifrado = txtcifrado.replace(/i/igm,"imes");
  var txtcifrado = txtcifrado.replace(/a/igm,"ai");
  var txtcifrado = txtcifrado.replace(/u/igm,"ufat");
  
  // Ocultar elementos y mostrar el texto cifrado
  document.getElementById("imgDer").style.display = "none"; // Ocultar imagen
  document.getElementById("texto").style.display = "none"; // Ocultar texto original
  document.getElementById("copiar").style.display = "show"; // Mostrar botón de copiar
  document.getElementById("texto2").innerHTML = txtcifrado; // Mostrar texto cifrado
  document.getElementById("inputtexto").innerHTML = " "; // Limpiar el input
  document.getElementById("copiar").style.display = "inherit"; // Mostrar el botón de copiar (por si está oculto)
}

// Función para desencriptar el texto ingresado
function desencriptar() {
  var texto = document.getElementById("inputtexto").value.toLowerCase(); // Obtener el texto del input y convertirlo a minúsculas
  // Sustituir cada "encriptación" con su vocal original
  var txtcifrado = texto.replace(/enter/igm,"e");
  var txtcifrado = txtcifrado.replace(/ober/igm,"o");
  var txtcifrado = txtcifrado.replace(/imes/igm,"i");
  var txtcifrado = txtcifrado.replace(/ai/igm,"a");
  var txtcifrado = txtcifrado.replace(/ufat/igm,"u");
  
  // Ocultar elementos y mostrar el texto descifrado
  document.getElementById("imgDer").style.display = "none"; // Ocultar imagen
  document.getElementById("texto").style.display = "none"; // Ocultar texto original
  document.getElementById("copiar").style.display = "show"; // Mostrar botón de copiar
  document.getElementById("texto2").innerHTML = txtcifrado; // Mostrar texto descifrado
  document.getElementById("inputtexto").innerHTML = " "; // Limpiar el input
  document.getElementById("copiar").style.display = "inherit"; // Mostrar el botón de copiar (por si está oculto)
}

// Función para copiar el texto mostrado en #texto2
function copia() {
  var contenido = document.querySelector("#texto2"); // Seleccionar el contenido a copiar
  contenido.select(); // Seleccionar el texto
  document.execCommand('Copy'); // Ejecutar comando de copiado
  alert("¡Texto copiado!"); // Mostrar alerta de copiado exitoso
}
