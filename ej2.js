function mostrarMensaje() {

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
    var mensaje = "Hola " + nombre + " " + apellido + ", tu edad es " + edad + " años.";
    document.getElementById("mensaje").innerHTML = mensaje;

  }
  