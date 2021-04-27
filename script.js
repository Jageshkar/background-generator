var css = document.querySelector("h3");
var colour1 = document.querySelector(".color1");
var colour2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	css.textContent = body.style.background + ";";
	body.style.background = "linear-gradient(to right, " + colour1.value + ", " + colour2.value + ")";
}

colour1.addEventListener("input", setGradient);
	
colour2.addEventListener("input", setGradient);