let xPosition = document.querySelector('#X');
let yPosition = document.querySelector('#Y');
let body = document.body;
let pacman = document.querySelector('img');
console.log(pacman.getBoundingClientRect());

body.addEventListener('mousemove', position);

function position(e){
    let positionX = e.clientX;
    let positionY = e.clientY;

    xPosition.innerHTML = `y: ${positionX}`;
    yPosition.innerHTML = `x: ${positionY}`;
}