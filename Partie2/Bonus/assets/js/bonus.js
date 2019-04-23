var c = document.getElementById('e2n');
var ctx = c.getContext('2d');

//E
ctx.beginPath();
ctx.moveTo(180,125);
ctx.lineTo(100,125);
ctx.lineTo(100,325);
ctx.lineTo(180,325);
ctx.moveTo(100,225);
ctx.lineTo(180,225);
ctx.lineWidth = 5;         // Définition de la largeur de ligne
ctx.strokeStyle = '#000000';
ctx.stroke();

//2
ctx.beginPath();
ctx.moveTo(180,124);
//quadraticCurveTo(points du milieu de la courbe, points d'arrivées)
ctx.quadraticCurveTo(410,0,250,250);
ctx.lineTo(160,375);
ctx.moveTo(160,378);
ctx.lineTo(265,350);
ctx.lineWidth = 10;         // Définition de la largeur de ligne
ctx.strokeStyle = '#EA4E1D';
ctx.stroke();

//N
ctx.beginPath();
ctx.moveTo(322,325);
ctx.lineTo(322,122);
ctx.lineTo(500,325);
ctx.lineTo(500,122);
ctx.lineWidth = 5;         // Définition de la largeur de ligne
ctx.strokeStyle = '#000000';
ctx.stroke();
ctx.closePath();

//1erlosange
ctx.beginPath();
ctx.moveTo(575,126);
ctx.lineTo(585,139);
ctx.lineTo(585,150);
ctx.lineTo(575,163);
ctx.lineTo(565,150);
ctx.lineTo(565,139);
ctx.lineTo(575,126);
ctx.fillStyle = '#EBEBEB';
ctx.fill();

//2èmelosange
ctx.beginPath();
ctx.moveTo(560,163);
ctx.lineTo(570,176);
ctx.lineTo(570,187);
ctx.lineTo(560,200);
ctx.lineTo(550,187);
ctx.lineTo(550,176);
ctx.lineTo(560,163);
ctx.fillStyle = '#DBDADB';
ctx.fill();

//3èmelosange
ctx.beginPath();
ctx.moveTo(590,163);
ctx.lineTo(600,176);
ctx.lineTo(600,187);
ctx.lineTo(590,200);
ctx.lineTo(580,187);
ctx.lineTo(580,176);
ctx.lineTo(590,163);
ctx.fillStyle = '#595656';
ctx.fill();

//4èmelosange
ctx.beginPath();
ctx.moveTo(575,200);
ctx.lineTo(585,213);
ctx.lineTo(585,224);
ctx.lineTo(575,237);
ctx.lineTo(565,224);
ctx.lineTo(565,213);
ctx.lineTo(575,200);
ctx.fillStyle = '#EA4E1A';
ctx.fill();

//5èmelosange
ctx.beginPath();
ctx.moveTo(560,237);
ctx.lineTo(570,250);
ctx.lineTo(570,261);
ctx.lineTo(560,274);
ctx.lineTo(550,261);
ctx.lineTo(550,250);
ctx.lineTo(560,237);
ctx.fillStyle = '#878787';
ctx.fill();

//5èmelosange
ctx.beginPath();
ctx.moveTo(590,237);
ctx.lineTo(600,250);
ctx.lineTo(600,261);
ctx.lineTo(590,274);
ctx.lineTo(580,261);
ctx.lineTo(580,250);
ctx.lineTo(590,237);
ctx.fillStyle = '#ECECEC';
ctx.fill();

//Texte
ctx.beginPath();
ctx.font = '25pt Verdana';
ctx.fillStyle = '#B9B9B9';
ctx.fillText('École du Numérique', 310, 370);
ctx.fillText('du Noyonnais', 300, 400);
