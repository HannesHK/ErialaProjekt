'use_strict'

let leftButton = document.getElementById('button_left');
let rightButton = document.getElementById('button_right');
let frame = document.getElementById('frame');

let mainBlock = document.getElementsByClassName('main')[0]
let loadingBlock = document.getElementById('loading');
let currentPos = 0;

//Alustab animatsiooni lehe laadimisel
window.addEventListener('load', () => {
    mainBlock.classList.add('loaded')
    loadingBlock.style.display = 'none'
});

//Liigutab 'frame' elementi automaatselt iga 5 sekundit
intervalId = window.setInterval(() => {
    currentPos -= 400;
    if (currentPos < -1600) {
        currentPos = 0;
    }
    frame.style.transform = 'translateX(' + currentPos + 'px)';
}, 5000);

//Liigutab 'frame' elementi, kui nuppu vajutatakse
leftButton.addEventListener('click', () => {
    currentPos += 400;
    if (currentPos > 0) {
        currentPos = -1600;
    }
    frame.style.transform = 'translateX(' + currentPos + 'px)';
    
    //Lähtesta taimer
    clearInterval(intervalId)
    intervalId = window.setInterval(() => {
        currentPos -= 400;
        if (currentPos < -1600) {
            currentPos = 0;
        }
        frame.style.transform = 'translateX(' + currentPos + 'px)';
    }, 5000);
});

//Liigutab 'frame' elementi, kui nuppu vajutatakse
rightButton.addEventListener('click', () => {
    currentPos -= 400;
    if (currentPos < -1600) {
        currentPos = 0;
    }
    frame.style.transform = 'translateX(' + currentPos + 'px)';

    //Lähtesta taimer
    clearInterval(intervalId)
    intervalId = window.setInterval(() => {
        currentPos -= 400;
        if (currentPos < -1600) {
            currentPos = 0;
        }
        frame.style.transform = 'translateX(' + currentPos + 'px)';
    }, 5000);
});
