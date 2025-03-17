const setup = () => {
    let btnToon = document.getElementById('btnToon');

    btnToon.addEventListener('click', waarden);
}

const waarden = () =>{
    let chkIsRoker = document.getElementById('chkIsRoker');
    let rbtMoedertaalNL = document.getElementById('rbtMoedertaalNL');
    let rbtMoedertaalFR = document.getElementById('rbtMoedertaalFR');
    let rbtMoedertaalEN= document.getElementById('rbtMoedertaalEN');
    let selFavorieteBuurland = document.getElementById('selFavorieteBuurland');
    let selBestelling = document.getElementById('selBestelling');

    if(chkIsRoker.checked){
        console.log("is roker");
    }else{
        console.log("is geen roker");
    }

    if(rbtMoedertaalNL.checked){
        console.log("moedertaal is Nederlands");
    }else if(rbtMoedertaalFR.checked){
        console.log("moedertaal is Frans");
    }else if(rbtMoedertaalEN.checked){
        console.log("moedertaal is Engels");
    }else{
        console.log("geen moedertaal gekozen");
    }

    if(selFavorieteBuurland.value === "nl"){
        console.log("Favoriete buurland is Nederland");
    }else if(selFavorieteBuurland.value === "fr"){
        console.log("Favoriete buurland is Frankrijk");
    }else if(selFavorieteBuurland.value === "dl"){
        console.log("Favoriete buurland is Duitsland");
    }
    let bestelling = "Bestelling bestaat uit ";
    for(let i = 0; i<selBestelling.size; i++){
        if(selBestelling.children[i].selected === true){
            bestelling += " " + selBestelling.children[i].value + " ";
        }
    }
    console.log(bestelling);
}
window.addEventListener("load", setup);