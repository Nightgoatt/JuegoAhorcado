let pincel = document.getElementById('canvas-0').getContext('2d');
let btnSave = document.querySelector('btn-agregar-func');
let saveScrn = (document.getElementById('saveScreen').style.display = 'none');

let palabras = ['javascript', 'purpura', 'casa', 'html', 'automata', 'gundam', 'azul'];
console.log(palabras);
let hiddenWord = '';
let correctWord = [];

let letters = [];
let keyLetters = [];
let finalWord = [];
let wrongLetter = [];
let errors = 10;
let numeroDeErrores = 10;

//Selecciona una palabra random del array "palabras".
function secretWord() {
	let palabra = palabras[Math.floor(Math.random() * palabras.length)];
	hiddenWord = palabra.toUpperCase();
	console.log(hiddenWord);
}

//Añade el error a la variable.
function addWrongLetter(letter) {
	if (hiddenWord.indexOf(letter) <= 0) {
		errors -= 1;
	}
}

//Añade la letra correcta a la variable.
function adicionarLetraCorrecta(i) {
	correctWord += hiddenWord[i].toUpperCase();
	console.log(correctWord + ':(');
}

//Inicia el estado del juego.
function playGame() {
	document.getElementById('btn-iniciar-func').style.display = 'none';
	document.getElementById('btn-agregar-func').style.display = 'none';

	secretWord();
	drawLines();

	document.onkeydown = (e) => {
		let letra = e.key.toUpperCase();

		if (wrongLetter.length <= numeroDeErrores) {
			if (!keyPress(e.key) && verificarLetra(e.keyCode)) {
				if (hiddenWord.includes(letra)) {
					adicionarLetraCorrecta(hiddenWord.indexOf(letra));
					for (let i = 0; i < hiddenWord.length; i++) {
						if (hiddenWord[i] === letra) {
							drawCorrectLetters(i);
							verificarVencedor(letra);
						}
					}
				} else {
					if (!keyPress(e.key) && !verificarVencedor(letra)) return;
					console.log(errors);
					drawGallow(errors);
					verificarFinJuego(letra);
				}
			}
		}
	};
}

//impide que teclas como shift y otras, sean consideradas errores y sean escritas
function verificarLetra(keyCode) {
	if (typeof keyCode === 'number' && keyCode >= 65 && keyCode <= 90) {
		return true;
	} else {
		return false;
	}
}

//Revisa si una tecla es presionada.
function keyPress(key) {
	if (letters.length < 1 || letters.indexOf(key) < 0) {
		letters.push(key);
		return false;
	} else {
		letters.push(key);
		return true;
	}
}

//Verifica si el usuario ha ganado
function verificarVencedor(letra) {
	finalWord.push(letra.toUpperCase());
	console.log(finalWord);
	if (finalWord.length == hiddenWord.length) {
		alert('win');
	}
}

function verificarFinJuego(letra) {
	//checa si la letra ha sido incluída en el array de  las letras correctas o incorrectas
	if (finalWord.length < hiddenWord.length) {
		//incluye las letras ya digitadas en el array
		wrongLetter.push(letra);
		console.log(wrongLetter + ' letrainc');

		//valida si el usuário cometió el numero maximo de errores
		if (wrongLetter.length > numeroDeErrores) {
			lose();
		} else if (finalWord.length < hiddenWord.length) {
			addWrongLetter(letra);
			drawIncorrectLetters(letra, errors);
		}
	}
}

//Inicia la funcion de guardado de palabra.
function saveWordScreen() {
	document.getElementById('saveScreen').style.display = 'block';
	document.getElementById('btn-agregar-func').style.display = 'none';
	document.getElementById('btn-iniciar-func').style.display = 'none';
	document.getElementById('canvas-0').style.display = 'none';
	document.getElementById('usrWord').focus();
}

//Guarda la palabra.
const saveWord = () => {
	let usrInput = document.getElementById('usrWord').value;
	localStorage.setItem('new_Word', JSON.stringify(usrInput));
	const newWord = JSON.parse(localStorage.getItem('new_Word')) || [];

	const col = JSON.parse(localStorage.getItem('arr')) || [];

	palabras.push(newWord);
	localStorage.setItem('arr', JSON.stringify(palabras));

	localStorage.setItem('arr', JSON.stringify(palabras));
	console.log(palabras);
};

//vuelve a mostrar el canvas al iniciar la función "playGame".
const initGame = () => {
	document.getElementById('saveScreen').style.display = 'none';
	playGame();
	document.getElementById('canvas-0').style.display = 'block';
};
