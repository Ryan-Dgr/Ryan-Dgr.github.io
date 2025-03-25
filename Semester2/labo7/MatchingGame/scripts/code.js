let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6
}
const setup = () => {
    let btnPlay = document.getElementById("btnPlay");
    let kaarten = document.getElementsByClassName("imgKaart");

    btnPlay.addEventListener("click", () => {
        btnPlay.parentNode.removeChild(btnPlay);
        let images = ["kaart1.jpg", "kaart2.jpg", "kaart3.jpg", "kaart4.jpg", "kaart5.jpg", "kaart6.jpg"];


        for (let i = 0; i < kaarten.length; i++) {

            kaarten[1].addEventListener("click", clicked);
        }

    })
}

let clicked = (event) => {

}
window.addEventListener("load", setup);