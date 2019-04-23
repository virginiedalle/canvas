var c = document.getElementById('iceCream');
var ctx = c.getContext('2d');

//CÔne
ctx.beginPath();
ctx.moveTo(150,300);
ctx.lineTo(100,150);
ctx.lineTo(200,150);
ctx.lineTo(150,300);
ctx.fillStyle = '#AA6522';
ctx.fill();
ctx.closePath();

//Glace
ctx.beginPath();
//moveTo(point de départ)
ctx.moveTo(100,150);
//quadraticCurveTo(points du milieu de la courbe, points d'arrivées)
ctx.quadraticCurveTo(150,20,200,150);
ctx.lineTo(100,150);
ctx.fillStyle = '#8A0908';
ctx.fill();
ctx.closePath();
