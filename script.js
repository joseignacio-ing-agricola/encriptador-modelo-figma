// Función para encriptar el texto ingresado
function encriptar() {
  let texto = document.getElementById("inputtexto").value.toLowerCase(); // Obtener el texto del input y convertirlo a minúsculas
  // Sustituir cada vocal con su respectiva "encriptación"
  let txtcifrado = texto.replace(/e/igm, "enter")
                        .replace(/o/igm, "ober")
                        .replace(/i/igm, "imes")
                        .replace(/a/igm, "ai")
                        .replace(/u/igm, "ufat");
  
  // Ocultar elementos y mostrar el texto cifrado
  document.getElementById("imgDer").style.display = "none"; // Ocultar imagen
  document.getElementById("texto").style.display = "none"; // Ocultar texto original
  document.getElementById("copiar").style.display = "inherit"; // Mostrar el botón de copiar
  document.getElementById("texto2").value = txtcifrado; // Mostrar texto cifrado
  document.getElementById("inputtexto").value = ""; // Limpiar el input
}

// Función para desencriptar el texto ingresado
function desencriptar() {
  let texto = document.getElementById("inputtexto").value.toLowerCase(); // Obtener el texto del input y convertirlo a minúsculas
  // Sustituir cada "encriptación" con su vocal original
  let txtcifrado = texto.replace(/enter/igm, "e")
                        .replace(/ober/igm, "o")
                        .replace(/imes/igm, "i")
                        .replace(/ai/igm, "a")
                        .replace(/ufat/igm, "u");
  
  // Ocultar elementos y mostrar el texto descifrado
  document.getElementById("imgDer").style.display = "none"; // Ocultar imagen
  document.getElementById("texto").style.display = "none"; // Ocultar texto original
  document.getElementById("copiar").style.display = "inherit"; // Mostrar el botón de copiar
  document.getElementById("texto2").value = txtcifrado; // Mostrar texto descifrado
  document.getElementById("inputtexto").value = ""; // Limpiar el input
}

// Función para copiar el texto mostrado en #texto2
function copia() {
  const contenido = document.getElementById("texto2").value; // Seleccionar el contenido a copiar
  navigator.clipboard.writeText(contenido).then(() => {
    alert("¡Texto copiado!"); // Mostrar alerta de copiado exitoso
  }).catch(err => {
    console.error("Error al copiar el texto: ", err);
  });
}
