var hora = 0;
var minutos = 0;
var segundos = 0;

var carai = 1000;
var cornometro;


function start() {
    cornometro = setInterval(() =>{timer()}, carai)
    document.getElementById('play').classList.add("disabled")
    document.getElementById('pause').classList.remove("disabled")
    document.getElementById('zerar').classList.remove("disabled")
}

function pause() {
    clearInterval(cornometro);
    document.getElementById('play').classList.remove("disabled")
    document.getElementById('pause').classList.add("disabled")
}

function zerar() {
    hora = 0;
    minutos = 0;
    segundos = 0;
    clearInterval(cornometro);
    document.getElementById("contador").innerHTML = "00:00:00"
    document.getElementById('play').classList.remove("disabled")
    document.getElementById('pause').classList.add("disabled")
    document.getElementById('zerar').classList.add("disabled")
}

function timer() {
    segundos++

    if(segundos === 60) {
        segundos = 0;
        minutos++
    } else if(minutos === 60) {
        minutos = 0
        hora++
    }

    var format = (hora < 10 ? "0" + hora : hora) + ":" + (minutos < 10 ? "0" + minutos : minutos) + ":" + (segundos < 10 ? "0" + segundos : segundos)
    document.getElementById("contador").innerHTML = format;
}

