const btn1 = document.getElementsByClassName('botao')[0];
const btn2 = document.getElementsByClassName('botao')[1];
const btn3 = document.getElementsByClassName('botao')[2];
var box1 = document.querySelector('.box');

btn1.addEventListener("click", () => {
    btn1.innerHTML = "OIEEE";
})

var oculto = false;

btn2.addEventListener("click", () => {
    oculto = !oculto;
    if (oculto) {
        for (i = 0; i < 1 ; i += 1) {
            box1.style.opacity = i;
        }
    }
    else {
        for (i = 1; i > 0 ; i -= 1) {
            box1.style.opacity = i;
        }
    }
})

var troca = true;

btn3.addEventListener("click", () => {
    troca = !troca;
    if (troca) {
        box1.classList.remove('aumento')
    }
    else {
        box1.classList.add('aumento')
    }
}) 
