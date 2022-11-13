//Dibujar Horca.
function drawGallow(val) {
	pincel.lineWidth = 6;
	pincel.lineCap = 'round';
	pincel.lineJoin = 'round';
	pincel.fillStyle = 'black';
	pincel.strokeStyle = 'red';

	switch (val) {
		case 9:
			pincel.beginPath();
			//Barra horizontal base.
			pincel.moveTo(250, 350);
			pincel.lineTo(550, 350);
			break;
		case 8:
			//Barra vertical izquierda.
			pincel.moveTo(350, 350);
			pincel.lineTo(350, 0);
			break;
		case 7:
			//Barra horizontal de arriba.
			pincel.moveTo(350, 2);
			pincel.lineTo(500, 2);
			break;

		case 6:
			//barra vertical derecha.
			pincel.moveTo(500, 75);
			pincel.lineTo(500, 3);
			break;
		case 5:
			//Cabeza
			pincel.moveTo(535, 110);
			pincel.arc(500, 110, 35, 0, Math.PI * 2);
			break;
		case 4:
			//Torso
			pincel.moveTo(500, 250);
			pincel.lineTo(500, 145);
			break;
		case 3:
			//Brazo 1
			pincel.moveTo(450, 200);
			pincel.lineTo(500, 160);
			break;
		case 2:
			//Brazo 2
			pincel.moveTo(550, 200);
			pincel.lineTo(500, 160);
			break;
		case 1:
			//Pierna 1
			pincel.moveTo(450, 300);
			pincel.lineTo(500, 250);
			break;
		case 0:
			//Pierna 2
			pincel.moveTo(550, 300);
			pincel.lineTo(500, 250);
			break;
	}

	pincel.stroke();
	pincel.closePath();
}

//Dibujar guiones.
function drawLines() {
	pincel.lineWidth = 5;
	pincel.lineCap = 'round';
	pincel.lineJoin = 'round';
	pincel.fillStyle = 'black';
	pincel.strokeStyle = 'red';

	let espacio = 900 / hiddenWord.length;
	for (let i = 0; i < hiddenWord.length; i++) {
		pincel.moveTo(15 + espacio * i, 500);
		pincel.lineTo(60 + espacio * i, 500);
	}

	pincel.stroke();
	pincel.closePath();
}

//Dibujar letras.
function drawCorrectLetters(index) {
	pincel.font = '30px Arial';
	pincel.lineWidth = 6;
	pincel.lineCap = 'round';
	pincel.lineJoin = 'round';
	pincel.fillStyle = 'red';

	let espacio = 900 / hiddenWord.length;
	pincel.fillText(hiddenWord[index], 25 + espacio * index, 470);
	pincel.stroke();
}

//Dibujar letras incorrectas.
function drawIncorrectLetters(letra, errorsLeft) {
	pincel.font = '20px Arial';
	pincel.lineWidth = 5;
	pincel.lineCap = 'round';
	pincel.lineJoin = 'round';
	pincel.fillStyle = 'red';
	pincel.fillText(letra, 300 + 40 * (10 - errorsLeft), 400, 40);
}

//Imprime mensaje de derrota.
function lose() {
	if (errors <= 0) {
		alert('Perdiste');
	}
}
