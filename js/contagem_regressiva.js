function iniciaContaagem() {
    const dataInput = document.getElementById("data").value;
    const mesInput = retornaMes(dataInput.substr(5, 2));
    const anoInput = dataInput.substr(0, 4);
    const diaInput = dataInput.substr(8, 2);

    if (dataInput === '') {
        alert("Por favor, insira uma data válida")
    } else {
        contador = setInterval(() => {
            var deadline = new Date(`${mesInput} ${diaInput}, ${anoInput} 12:00:00`).getTime()
            var t = deadline - new Date().getTime()
            var dia = Math.floor(t / (1000 * 60 * 60 * 24));
            var horas = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutos = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            var segundos = Math.floor((t % (1000 * 60)) / 1000);

            document.getElementById("dias-cont").innerHTML = (dia < 10 ? "0" + dia : dia)
            document.getElementById("horas-cont").innerHTML = (horas < 10 ? "0" + horas : horas)
            document.getElementById("minutos-cont").innerHTML = (minutos < 10 ? "0" + minutos : minutos)
            document.getElementById("segundos-cont").innerHTML = (segundos < 10 ? "0" + segundos : segundos)
        }, 1000)
        document.getElementById('play-contagem').classList.add("disabled")
        document.getElementById('zerar-contagem').classList.remove("disabled")
    }
}

// Função que retorna o mês
function retornaMes(mes) {
    if (mes === "01") {
        return "jan"
    } else if (mes === "02") {
        return "feb"
    } else if (mes === "03") {
        return "mar"
    } else if (mes === "04") {
        return "apr"
    } else if (mes === "05") {
        return "may"
    } else if (mes === "06") {
        return "jun"
    } else if (mes === "07") {
        return "jul"
    } else if (mes === "08") {
        return "aug"
    } else if (mes === "09") {
        return "sep"
    } else if (mes === "10") {
        return "oct"
    } else if (mes === "11") {
        return "nov"
    } else if (mes === "12") {
        return "dec"
    } else {
        return "Porra Tá Errado"
    }
}

function pararContagem() {
    clearInterval(contador)
    document.getElementById("dias-cont").innerHTML = "00"
    document.getElementById("horas-cont").innerHTML = "00"
    document.getElementById("minutos-cont").innerHTML = "00"
    document.getElementById("segundos-cont").innerHTML = "00"

    document.getElementById('play-contagem').classList.remove("disabled")
    document.getElementById('zerar-contagem').classList.add("disabled")
}
