const canvas1 = document.getElementById ('canvas1');
const ctx = canvas1.getContext ('2d');
ctx.beginPath();
ctx.arc(150, 75, 50, 0, Math.PI * 2, true);
ctx.moveTo(110, 75);
ctx.arc(150, 75, 35, 0, Math.PI, false);
ctx.moveTo(65, 65);
ctx.arc(170, 65, 5, 0, Math.PI * 2, true);
ctx.moveTo(95, 65);
ctx.arc(130, 65, 5, 0, Math.PI * 2, true);
ctx.stroke();

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
ctx2.fillStyle = 'green';
ctx2.fillRect (77, 10, 150, 100);

const canvas3 = document.getElementById ('canvas3');
const ctx3 = canvas3.getContext ('2d');
ctx3.strokeStyle = 'black';
ctx3.beginPath();
ctx3.moveTo(230, 65);
ctx3.lineTo(80, 65);
ctx3.stroke();

const canvas4 = document.getElementById ('canvas4');
const ctx4 = canvas4.getContext ('2d');
ctx4.beginPath();
ctx4.arc(150, 55, 50, 0, Math.PI * 2, true);
ctx4.moveTo(200, 100);
ctx4.stroke();

const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas5.getContext('2d');
ctx5.moveTo(50, 20);
ctx5.quadraticCurveTo(230, 30, 50, 100);
ctx5.stroke();

const canvas6 = document.getElementById('canvas6');
const ctx6 = canvas6.getContext('2d');
ctx6.beginPath();
ctx6.moveTo(75,50);
ctx6.lineTo(100,75);
ctx6.lineTo(100,25);
ctx6.fill();

var canvas7 = document.getElementById('canvas7').getContext('2d');
var img = new Image();
img.onload = function() {
            canvas7.drawImage(img, 50, 38);
};
img.src = 'img/rosa.jpg';