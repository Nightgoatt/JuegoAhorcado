let pincel = document.getElementById('canvas-0').getContext('2d');
let palabras = ["javascript", "purpura", "casa", "html", "automata", "gundam", "azul"];
let hiddenWord = "";
let btnAgregar = document.querySelector("#btn-agregar-func");
let words = [];
let errors = 10;

//Selecciona una palabra random del array "palabras".
function secretWord(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    hiddenWord = palabra.toUpperCase();
    console.log(hiddenWord);
}

//Añade
function addIncorrectWord(){
    console.log(errors);
}

//Inicia el estado del juego.
function playGame(){
    document.getElementById("btn-iniciar-func").style.display = "none";

    secretWord();
    drawLines();

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();
        if (keyPress(letra) && hiddenWord.includes(letra)){
            for (let i = 0; i < hiddenWord.length; i++){
                if (hiddenWord[i] === letra){
                    drawCorrectLetters(i);
                }
            }
        }
        else{
            errors -= 1;
            addIncorrectWord(letra);
            drawIncorrectLetters(letra, errors);
            drawGallow(errors);
            lose();
        }
        
    }
}

//Revisa si una tecla es presionada.
function keyPress(key){
    let estado = false;
    if (key >= 65 && words.indexOf(key) || key <= 90 && words.indexOf(key)){
        words.push(key);
        console.log(key);
        console.log(words);
        return estado
    }    
    else{
        estado = true;
        console.log(key);
        return estado
    }
}
