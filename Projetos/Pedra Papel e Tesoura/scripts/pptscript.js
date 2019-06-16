var urlParams = new URLSearchParams(window.location.search);
var op = urlParams.get('op');
var pl = op;

if(op == 'pedra'){
	op = 1;
}else if(op == 'papel'){
	op = 2;
}else if(op == 'tesoura'){
	op = 3;
}

var ia = Math.floor(Math.random() * 3)+1;

if(op == 1 && ia == 1){
	document.write('<h1>Empate!</h1>');
}else if(op == 2 && ia == 2){
	document.write('<h1>Empate!</h1>');
}else if(op == 3 && ia == 3){
	document.write('<h1>Empate!</h1>');
}else if(op == 1 && ia == 2){
	document.write('<h1>Você Perdeu!</h1>');
}else if(op == 2 && ia == 3){
	document.write('<h1>Você Perdeu!</h1>');
}else if(op == 3 && ia == 1){
	document.write('<h1>Você Perdeu!</h1>');
}else if(op == 1 && ia == 3){
	document.write('<h1>Você Ganhou!</h1>');
}else if(op == 2 && ia == 1){
	document.write('<h1>Você Ganhou!</h1>');
}else if(op == 3 && ia == 2){
	document.write('<h1>Você Ganhou!</h1>');
}

var ia2 = 0;
if(ia == 1){
	ia2 = 'pedra';
}else if(ia == 2){
	ia2 = 'papel';
}else if(ia == 3){
	ia2 = 'tesoura';
}
document.write('<h2>Você selecionou '+pl+' e o computador selecionou '+ia2);