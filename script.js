var body = document.querySelector("body");
var css = document.querySelector("h3");
var input1 = document.querySelector(".color1");
var input2 = document.querySelector(".color2");
var randomInput = document.getElementById("random-color");

function changeBgColor() {
	body.style.background = "linear-gradient(to right, " + input1.value + ", " + input2.value + ")";
	css.textContent = body.style.background + ";";
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';

	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}

	return color;
}

input1.addEventListener("input", changeBgColor);
input2.addEventListener("input", changeBgColor);

randomInput.addEventListener("click", function(e) {
	input1.value = getRandomColor();
	input2.value = getRandomColor();
	changeBgColor(input1.value, input2.value);
});

changeBgColor();