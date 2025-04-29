const storeSliderValues = () => {
    localStorage.setItem("sliderValues", JSON.stringify({
        red: document.getElementById("sldRed").value,
        green: document.getElementById("sldGreen").value,
        blue: document.getElementById("sldBlue").value
    }));
};

const restoreSliderValues = () => {
    let sliderValues;
    let sliderValuesJSON = localStorage.getItem("sliderValues");
    if (sliderValuesJSON === undefined) {

        sliderValues = {
            red: null,
            green: null,
            blue: null
        };
    } else {

        sliderValues = JSON.parse(sliderValuesJSON);
    }
    document.getElementById("sldRed").value = sliderValues.red;
    document.getElementById("sldGreen").value = sliderValues.green;
    document.getElementById("sldBlue").value = sliderValues.blue;
};


const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let swatches = [];
    let elSwatch = document.querySelectorAll("#swatchComponents .swatch");
    elSwatch.forEach(swatch => {
        swatches.push({
            red: swatch.getAttribute("data-red"),
            green: swatch.getAttribute("data-green"),
            blue: swatch.getAttribute("data-blue")
        })
    })

    localStorage.setItem("swatches", JSON.stringify(swatches));
};

const restoreSwatches = () => {
    let jsonText = localStorage.getItem("swatches");
    console.log(localStorage.getItem("swatches"));
    if (jsonText !== null) {
        let rgbColors = JSON.parse(jsonText);
        for (let i = 0; i < rgbColors.length; i++) {
           let rgb = rgbColors[i];
           addSwatchComponent(rgb.red, rgb.green, rgb.blue);
        }
    }
};
