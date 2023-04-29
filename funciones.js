window.onload = function() {

    var BotonIZQ = document.getElementById("btnIzq");
    var BotonABA= document.getElementById("btnAba");
    var BotonDER = document.getElementById("btnDer");
    var BotonARR = document.getElementById("btnArr");
    var Personaje = document.getElementById("avatar");
  
   
    BotonIZQ.addEventListener("click", function() {
      Personaje.src = "images/izq.png";
    });
  
    BotonABA.addEventListener("click", function() {
      Personaje.src = "images/atr.png";
    });
  
    BotonDER.addEventListener("click", function() {
      Personaje.src = "images/der.png";
    });
  
    BotonARR.addEventListener("click", function() {
      Personaje.src = "images/ade.png";
    });
  };