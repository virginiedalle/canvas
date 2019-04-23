var c = document.getElementById('car');
var ctx = c.getContext('2d');

ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(300,100);
ctx.lineTo(300,150);
ctx.lineTo(350,150);
ctx.lineTo(350,200);
ctx.lineTo(50,200);
ctx.lineTo(50,150);
ctx.lineTo(100,150);
ctx.lineTo(100,100);
ctx.fillStyle = '#00A551';
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.arc(75,235,35,0,Math.PI*2,true);
ctx.strokeStyle = '#747474';
ctx.stroke();
ctx.fillStyle = '#CDCDCD';
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.arc(320,235,35,0,Math.PI*2,true);
ctx.strokeStyle = '#747474';
ctx.stroke();
ctx.fillStyle = '#CDCDCD';
ctx.fill();
ctx.closePath();
