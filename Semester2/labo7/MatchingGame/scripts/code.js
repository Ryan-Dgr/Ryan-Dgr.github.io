let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6
}
let locked = false;
const setup = () => {
    let btnPlay = document.getElementById("btnPlay");
    let kaarten = document.getElementsByClassName("imgKaart");

    btnPlay.addEventListener("click", () => {
        btnPlay.parentNode.removeChild(btnPlay);

        let images = ["kaart1.jpg", "kaart2.jpg", "kaart3.jpg", "kaart4.jpg", "kaart5.jpg", "kaart6.jpg"];
        let index = -1;
        for (let i = 0; i < kaarten.length; i++) {
            if(index < 5){
                index++;
            }else{
                index = 0;
            }
            kaarten[i].setAttribute("data-src", "images/" + images[index]);
            kaarten[i].addEventListener("click", clicked);
        }
    })
}

let src1 = "";
let src2 = "";
let eerste = null;

let clicked = (event) => {
    let kaart = event.target;
    if(locked){
        return;
    }
    if (src1 === "") {
        kaart.setAttribute("src", kaart.getAttribute("data-src"));
        src1 = kaart.getAttribute("data-src");
        eerste = kaart;
    } else if (src2 === "") {
        kaart.setAttribute("src", kaart.getAttribute("data-src"));
        src2 = kaart.getAttribute("data-src");
        locked = true;
        if (src1 === src2) {
            setTimeout(() => {
                kaart.parentNode.removeChild(kaart);
                eerste.parentNode.removeChild(eerste);
                eerste = null;
                locked = false;
            }, 500);
        }else {

            setTimeout(() => {
                kaart.setAttribute("src", "images/kaartAchterkant.jpg");
                eerste.setAttribute("src", "images/kaartAchterkant.jpg");
                eerste = null;
                locked = false;
            }, 1000);
        }
        src1 = "";
        src2 = "";
    }





}
window.addEventListener("load", setup);