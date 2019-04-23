var c = document.getElementById('ET');
var ctx = c.getContext('2d');

//Carré de fond
ctx.beginPath();
ctx.fillStyle = '#0000FF';
ctx.fillRect(0,0,400,400);
ctx.closePath();
//Coque
ctx.beginPath();
ctx.moveTo(150,200);
ctx.quadraticCurveTo(200,40,250,200);
ctx.fillStyle='#FFFFFF';
ctx.fill();
ctx.closePath();
//Navette
ctx.beginPath();
ctx.moveTo(100,200);
ctx.quadraticCurveTo(190,120,300,200);
ctx.lineTo(100,200);
ctx.fillStyle='#E0E1F3';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(300,200);
ctx.quadraticCurveTo(190,280,100,200);
ctx.fillStyle='#E0E1F3';
ctx.fill();
ctx.closePath();
