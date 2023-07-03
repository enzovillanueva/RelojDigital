
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let double_point = document.getElementsByClassName("point");

setInterval(() => {
    let horario = new Date();
    
    hours.innerHTML = (horario.getHours()<10 ? "0":"") + horario.getHours();
    minutes.innerHTML = (horario.getMinutes()<10 ? "0":"") + horario.getMinutes();
    seconds.innerHTML = (horario.getSeconds()<10 ? "0":"") + horario.getSeconds();
}, 1000);

document.getElementById("autumn").addEventListener("click",() => {
    change_color_clock("black");
    document.body.style.background  = "linear-gradient(45deg, #e76f51 40%, #f4a261, #e9c46a)";
})

document.getElementById("default").addEventListener("click",() => {
    change_color_clock("white");
    document.body.style.background  = "linear-gradient(45deg, #01283d 40%, #124559, #0a9396)";
})

document.getElementById("vice").addEventListener("click",() => {
    change_color_clock("white");
    document.body.style.background  = "linear-gradient(45deg, #7209b7 40%, #b5179e, #f72585)";
})

function change_color_clock(color){
    hours.style.color = color;
    minutes.style.color = color;
    seconds.style.color = color;
    double_point[0].style.color = color;
    double_point[1].style.color = color;
}