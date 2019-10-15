var colors = [];
var squares = document.querySelectorAll(".square");
var numSquares = 9;

var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");	

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for (var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		modeButtons[2].classList.remove("selected");
		this.classList.add("selected");
		if (this.textContent === "Easy") {
			numSquares = 3;
		} else if (this.textContent === "Medium") {
			numSquares = 6; 
		} else {
			numSquares = 9;
		}
		reset();
	});
}
}

function setUpSquares(){
	for (var i = 0; i < squares.length; i++) {
	//ADICIONA A COR CLICADA A UMA VARIAVEL
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		//COMPARA POR IF STATEMENT SE A COR CLICADA É IGUAL A VAR PICKEDCOLOR
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
			
	});
	}
}

function reset(){
	//CRIA NOVAS CORES
	colors =generateRandomColors(numSquares);
	//PEGA NOVAS CORES DA ARRAY
	pickedColor = pickColor();
	//MUDA AS CORES DO DISPLAY 
	h1.style.backgroundColor = "#232323";
	//VOLTA A COR DO BACKGROUND NO h1
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	//MUDA AS CORES DOS QUADRADOS
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}


resetButton.addEventListener("click", function(){
	//CRIA NOVAS CORES
	colors =generateRandomColors(numSquares);
	//PEGA NOVAS CORES DA ARRAY
	pickedColor = pickColor();
	//MUDA AS CORES DO DISPLAY 
	h1.style.backgroundColor = "#232323";
	//VOLTA A COR DO BACKGROUND NO H1
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	//MUDA AS CORES DOS QUADRADOS
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
});


colorDisplay.textContent = pickedColor;



function changeColors(color) {
	//ITERA SOBRE AS CORES
	for(var i = 0 ; i < squares.length; i++){
		//ATRIBUI A COR CORRETA A TODOS OS QUADRADOS
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	for(var i = 0; i < colors.length; i++){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
	}
}

function generateRandomColors(num){
 //CRIA UM ARRAY
 var arr = [];
 //ADICIONA AS CORRES A ARRAY
 for(var i = 0; i < num; i++){
 	//CRIA UMA COR ALEATÓRIA E COLOCA NO ARRAY
 	arr.push(randomColor());
 }
 //RETORNA ESSA ARRAY
 return arr;	
}

function randomColor(){
	//PEGA UM RED DE 0 A 255
	var r = Math.floor(Math.random() * 256);
	//PEGA UM GREEN DE 0 A 255
	var g = Math.floor(Math.random() * 256);
	//PEGA UM BLUE DE 0 A 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
