const setup = () => {
    let output = document.getElementById("output");
    let maand = Number(prompt("welke maand geboren? "));
    let dag = Number(prompt("welke dag geboren? "));

    let vandaag = new Date();
    let geboorte = new Date(vandaag.getFullYear(), maand-1, dag);

    if(geboorte.toDateString() === vandaag.toDateString()) {
        output.innerText = "Het is je verjaardag!";
    }else{
        if (geboorte < vandaag) {
            geboorte.setFullYear(vandaag.getFullYear() + 1);
        }
        let verschil = Math.ceil((geboorte - vandaag) / (1000 * 60 * 60 * 24));
        output.innerHTML = verschil + " dagen tot verjaardag";
    }


}

window.addEventListener("load", setup);