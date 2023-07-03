
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

setInterval(() => {
    let horario = new Date();
    
    hours.innerHTML = (horario.getHours()<10 ? "0":"") + horario.getHours();
    minutes.innerHTML = (horario.getMinutes()<10 ? "0":"") + horario.getMinutes();
    seconds.innerHTML = (horario.getSeconds()<10 ? "0":"") + horario.getSeconds();
}, 1000);
