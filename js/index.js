window.addEventListener("load", function () {
  console.log("Hola mundo");
});

function mostrarFeedback() {
  var fondoPopupFeedback = document.getElementById("contenedor-feedback");
  var seccionFormulario = document.getElementById("formulario");

  seccionFormulario.classList.add("no-mostrar");
  fondoPopupFeedback.classList.remove("no-mostrar");
  fondoPopupFeedback.classList.add("mostrar");
}

function recolectarDatos() {
 
  var inputNombre = document.getElementById("fname");
  var nombre = inputNombre.value;

  var inputMail = document.getElementById("mail");
  var mail = inputMail.value;

  var spanNombre = document.getElementById("nombre-usuario");
  var spanEmail = document.getElementById("mail-usuario");
 

  spanNombre.innerText = nombre;
  spanEmail.innerText = mail;

}

function resetearFormulario() {
  var inputNombre = document.getElementById("fname");
  var inputApellido = document.getElementById("apellido");
  var inputMail = document.getElementById("mail");
  inputNombre.value = "";
  inputApellido.value="";
  inputMail.value = "";
}

function enviarFormulario(e) {
  recolectarDatos();
  mostrarFeedback();
  resetearFormulario();
}

function cerrarFeedback() {
  var seccionFormulario = document.getElementById("formulario");
  var fondoPopupFeedback = document.getElementById("contenedor-feedback");

  fondoPopupFeedback.classList.remove("mostrar");
  fondoPopupFeedback.classList.add("no-mostrar");
  seccionFormulario.classList.remove("no-mostrar");
}

function displayRadioButtonValue() {
  var ele = document.querySelectorAll("#radio-container input");

  for (i = 0; i < ele.length; i++) {
    if ((ele[i].type = "radio")) {
      if (ele[i].checked) {
        return ele[i].value;
      }
    }
  }
}
