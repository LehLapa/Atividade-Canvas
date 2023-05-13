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
ctx3.moveTo(20, 150);
ctx3.lineTo(130, 150);
ctx3.stroke();

const canvas4 = document.getElementById ('canvas4');
const ctx4 = canvas4.getContext ('2d');
ctx4.beginPath();
ctx4.arc(150, 75, 50, 0, Math.PI * 2, true);
ctx4.moveTo(200, 100);
ctx4.stroke();

const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas5.getContext('2d');
ctx5.arc(150, 75, 20, 0, Math.PI * 75, true);
ctx5.stroke();

const canvas6 = document.getElementById('canvas6');
const ctx6 = canvas6.getContext('2d');
ctx6.beginPath();
ctx6.moveTo(75,50);
ctx6.lineTo(100,75);
ctx6.lineTo(100,25);
ctx6.fill();

const canvas7 = getElementById('canvas7');
document.onload = function insertImg() {
    document.getElementById('rosa').src = "img/rosa.jpg";
}