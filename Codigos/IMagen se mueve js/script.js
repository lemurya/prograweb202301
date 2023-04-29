function moverArriba() {
    let imagen = document.getElementById("imagen");
    let posicionActual = parseInt(imagen.style.top) || 0;
    imagen.style.top = (posicionActual - 10) + "px";
  }

  function moverAbajo() {
    let imagen = document.getElementById("imagen");
    var posicionActual = parseInt(imagen.style.top) || 0;
    imagen.style.top = (posicionActual + 10) + "px";
  }

  function moverIzquierda() {
    let imagen = document.getElementById("imagen");
    let posicionActual = parseInt(imagen.style.left) || 0;
    imagen.style.left = (posicionActual - 10) + "px";
  }

  function moverDerecha() {
    let imagen = document.getElementById("imagen");
    let posicionActual = parseInt(imagen.style.left) || 0;
    imagen.style.left = (posicionActual + 10) + "px";
  }
