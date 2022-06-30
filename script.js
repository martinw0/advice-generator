var request = new XMLHttpRequest();
var adviceId = document.querySelector('.card h1 span');
var adviceText = document.querySelector('.card h2 span');
var button = document.querySelector('.card button');

generateAdvice();

button.addEventListener('click', generateAdvice);

function generateAdvice() {
    request.open('GET', 'https://api.adviceslip.com/advice');
    request.onload = function () {
        var data = JSON.parse(this.response);
        printAdvice(data.slip.id, data.slip.advice);
    };
    request.send();
}

function printAdvice (id, advice) {
    adviceId.innerHTML = id;
    adviceText.innerHTML = advice;
}