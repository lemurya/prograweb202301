
let resul = 0;

function escribir1(){
    
    var num = 1;

    document.getElementById('scr').value += num;
    
    
}

function escribir2(){
    var num = 2
    document.getElementById("scr").value += num;
}


function escribir3(){
    var num = 3
    document.getElementById("scr").value += num;
}
function escribir4(){
    var num = 4
    document.getElementById("scr").value += num;
}
function escribir5(){
    var num = 5
    document.getElementById("scr").value += num;
}
function escribir6(){
    var num = 6
    document.getElementById("scr").value += num;
}
function escribir7(){
    var num = 7
    document.getElementById("scr").value += num;
}
function escribir8(){
    var num = 8
    document.getElementById("scr").value += num;
}

function escribir9(){
    var num = 9
    document.getElementById("scr").value += num;
}
function escribir0(){
    var num = 0
    document.getElementById("scr").value += num;
}

function blk(){
    resul = parseInt(document.getElementById("scr").value);
    document.getElementById("scr").value = "";
}

function sumar(){
    resul += parseInt(document.getElementById("scr").value);
    document.getElementById("scr").value = "";

}

function resta(){
    resul -= parseInt(document.getElementById("scr").value);
    
    document.getElementById("scr").value = "";

}

function cero(){
    resul = 0;
    document.getElementById("src").value = 0;
}


function igual(){
    document.getElementById("scr").value = resul;
}

function multiplicar(){
    resul = resul * parseInt(document.getElementById("scr").value);
    document.getElementById("scr").value = "";
}

function dividir(){
    resul = resul / parseInt(document.getElementById("scr").value);
    document.getElementById("scr").value = "";
}
