var c = document.getElementById('house');
var ctx = c.getContext('2d');

//x = horizontal y = vertical (x,y)
// lineTo -> Méthode fillStyle -> Attribut

//Toit
//Début du dessin
ctx.beginPath();
//moveTo Premier point (placer le point de départ à un endroit.)
ctx.moveTo(100,150);
//lineTo Tracer des points.
ctx.lineTo(200,50);
ctx.lineTo(300,150);
ctx.lineTo(100,150);
//closePath pour dire qu'on termine (et que ça ferme tout seul, on peut donc retirer la dernière ligne.)
//fillStyle pour attribuer la couleur.
ctx.fillStyle = '#D7823E';
//fill pour appliquer la couleur.
ctx.fill();
ctx.closePath();

//Maison
ctx.beginPath();
ctx.moveTo(100,150);
ctx.lineTo(300,150);
ctx.lineTo(300,350);
ctx.lineTo(100,350);
ctx.fillStyle = '#A1D8E6';
ctx.fill();
ctx.closePath();

//Fenêtre
ctx.beginPath();
ctx.moveTo(175,350);
ctx.lineTo(175,275);
ctx.lineTo(225,275);
ctx.lineTo(225,350);
ctx.fillStyle = '#C9C9C9';
ctx.fill();
ctx.closePath();

//Fenêtre
ctx.beginPath();
ctx.moveTo(125,225);
ctx.lineTo(125,175);
ctx.lineTo(175,175);
ctx.lineTo(175,225);
ctx.fillStyle = '#C9C9C9';
ctx.fill();
ctx.closePath();

//Porte
ctx.beginPath();
ctx.moveTo(225,225);
ctx.lineTo(225,175);
ctx.lineTo(275,175);
ctx.lineTo(275,225);
ctx.fillStyle = '#C9C9C9';
ctx.fill();
ctx.closePath();
