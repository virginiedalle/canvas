var c = document.getElementById('ET');
var ctx = c.getContext('2d');
//fillStyle garde la même valeur que précédemment,nous ne sommes pas obligé de le remettre à chaque fois.
//Tête
ctx.beginPath();
ctx.arc(200,100,50,0,Math.PI*2,true);
ctx.fillStyle = '#976F0F';
ctx.fill();
ctx.closePath();

//Corps
ctx.beginPath();
ctx.moveTo(150,130);
ctx.lineTo(50,130);
ctx.lineTo(50,160);
ctx.lineTo(150,160);
ctx.lineTo(150,350);
ctx.lineTo(190,350);
ctx.lineTo(190,300);
ctx.lineTo(210,300);
ctx.lineTo(210,350);
ctx.lineTo(250,350);
ctx.lineTo(250,160);
ctx.lineTo(350,160);
ctx.lineTo(350,130);
ctx.lineTo(150,130);
ctx.fillStyle = '#976F0F';
ctx.fill();
ctx.closePath();

//Boutons
ctx.beginPath();
ctx.arc(200,180,10,0,Math.PI*2,true);
ctx.fillStyle = '#7A2976';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(200,220,10,0,Math.PI*2,true);
ctx.fillStyle = '#7A2976';
ctx.fill();
ctx.closePath();

//Yeux
ctx.beginPath();
ctx.arc(180,85,10,0,Math.PI*2,true);
ctx.fillStyle = '#FFFFFF';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(218,85,10,0,Math.PI*2,true);
ctx.fillStyle = '#FFFFFF';
ctx.fill();
ctx.closePath();

//Sourcils
ctx.beginPath();
ctx.moveTo(170,72);
ctx.quadraticCurveTo(180,60,190,72);
ctx.strokeStyle='#FFFFFF';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(210,72);
ctx.quadraticCurveTo(220,60,230,72);
ctx.strokeStyle='#FFFFFF';
ctx.stroke();

//Bouche
ctx.beginPath();
ctx.moveTo(175,110);
ctx.quadraticCurveTo(200,120,220,110);
ctx.moveTo(220,110);
ctx.quadraticCurveTo(200,135,175,110);
ctx.lineWidth = 2;         // Définition de la largeur de ligne
ctx.strokeStyle='#C43E08';
ctx.stroke();

//Arrondi bras gauche
ctx.beginPath();
ctx.moveTo(50,130);
ctx.quadraticCurveTo(20,145,50,160);
ctx.fillStyle = '#976F0F';
ctx.fill();
ctx.closePath();

//Arrondi bras droit
ctx.beginPath();
ctx.moveTo(350,130);
ctx.quadraticCurveTo(380,145,350,160);
ctx.fillStyle = '#976F0F';
ctx.fill();
ctx.closePath();

//Arrondi pied gauche
ctx.beginPath();
ctx.moveTo(150,350);
ctx.quadraticCurveTo(170,380,190,350);
ctx.fillStyle = '#976F0F';
ctx.fill();
ctx.closePath();

//Arrondi pied droit
ctx.beginPath();
ctx.moveTo(210,350);
ctx.quadraticCurveTo(230,380,250,350);
ctx.fillStyle = '#976F0F';
ctx.fill();
ctx.closePath();

//Arrondi jambes
ctx.beginPath();
ctx.moveTo(190,300);
ctx.quadraticCurveTo(200,280,210,300);
ctx.fillStyle = '#FFFFFF';
ctx.fill();
ctx.closePath();
