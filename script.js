// Fib Art Generator

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.globalCompositeOperation = 'destination-over';

let number = 0;
let scale = 12;
let hue = Math.random() * 360;

function drawFlower() {
  let angle = number * 9.2;
  let radius = scale * Math.sqrt(number);
  let posX = radius * Math.sin(angle) + canvas.width / 2;
  let posY = radius * Math.cos(angle) + canvas.height / 2;

  ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(posX, posY, 8, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  number += 1;
  hue += 0.5;
}

function animate() {
  //ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (number > canvas.width) {
    return;
  }

  drawFlower();
  requestAnimationFrame(animate);
}

animate();