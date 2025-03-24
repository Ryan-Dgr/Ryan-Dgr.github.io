const initialize = () => {
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		// we moeten zowel op het input als het change event reageren,
		// zie http://stackoverflow.com/questions/18544890
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();
	let btnSave = document.getElementById("btnSave");
	btnSave.addEventListener("click", save);

	let divSaves = document.getElementById("saves");
	divSaves.addEventListener("click", (event) => {
		if (event.target && event.target.classList.contains("btnDelete")) {
			fndelete(event);
		}
		if (event.target && event.target.classList.contains("save")) {
			copy(event);
		}
	});

};

const update = () => {
	let red=document.getElementById("sldRed").value; //input always value
	let green=document.getElementById("sldGreen").value;
	let blue=document.getElementById("sldBlue").value;
	document.getElementById("lblRed").innerHTML=red;
	document.getElementById("lblGreen").innerHTML=green;// html-element innerHTML
	document.getElementById("lblBlue").innerHTML=blue;
	let swatch=document.getElementById("swatch");
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
};

const save = () =>{
	let sldRed = document.getElementById("sldRed").value;
	let sldGreen = document.getElementById("sldGreen").value;
	let sldBlue = document.getElementById("sldBlue").value;
	let divSaves = document.getElementById("saves");
	let div = document.createElement("div");
	div.setAttribute("class", "save");
	let btnDelete = document.createElement("button");
	btnDelete.setAttribute("class", "btnDelete");
	let node = document.createTextNode("X");
	btnDelete.appendChild(node);
	div.appendChild(btnDelete);
	div.setAttribute("style", "background-color: rgb(" + sldRed + ", " + sldGreen + ", " + sldBlue + ")");

	divSaves.appendChild(div);
}

const fndelete = (event) => {
	//event.target.parentElement.style.display = "none";
	event.target.parentElement.remove();
}

const copy = (event) => {

	let style = event.target.getAttribute("style");
	style = style.substring(22, style.length-1);
	let colors = style.split(", ");

	document.getElementById("sldRed").value = colors[0];
	document.getElementById("sldGreen").value = colors[1];
	document.getElementById("sldBlue").value = colors[2];

	update();



}
window.addEventListener("load", initialize);