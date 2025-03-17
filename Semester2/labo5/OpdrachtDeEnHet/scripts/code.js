const setup = () => {
    let btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click", vervangen);
}

let vervangen = () => {
    let zin = document.getElementById("input").value.trim().toLowerCase();
    let zin2 = "";
    let woorden = zin.split(" ");
    let output= document.getElementById("output");

    for (let i = 0; i < woorden.length; i++) {
        if (woorden[i] === "de") {
            zin2 += "het ";
        } else {
            zin2 += woorden[i] + " ";
        }
    }


    zin2 = zin2.trim();

    console.log(zin2);
    output.innerHTML = zin2;
}

window.addEventListener("load", setup);
