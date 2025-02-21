const setup = () => {
    let inputRed = document.getElementById("sldRed");
    let inputGreen = document.getElementById("sldGreen");
    let inputBlue = document.getElementById("sldBlue");

    inputRed.addEventListener("input", update);
    inputGreen.addEventListener("input", update);
    inputBlue.addEventListener("input", update);
}

const update = () => {
    let sliders = document.getElementsByClassName("slider");
    document.getElementById("lblRed").innerText = sliders[0].value;
    document.getElementById("lblGreen").innerText = sliders[1].value;
    document.getElementById("lblBlue").innerText = sliders[2].value;
    document.getElementById("swatch").style.backgroundColor = 'rgb(' + sliders[0].value + ',' + sliders[1].value + ',' + sliders[2].value + ')';
}

window.addEventListener("load", setup);