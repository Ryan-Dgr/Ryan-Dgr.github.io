let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    AANTAL_GELIJKE_KAARTEN: 6
}
let locked = false;

const setup = () => {

    let atl = prompt("hoeveel gelijke kaarten? (2/3/4)");
    while (![2, 3, 4].includes(Number(atl))) {
        atl = prompt("Hoeveel gelijke kaarten? (2/3/4)");
    }

    atl = Number(atl);
    global.AANTAL_GELIJKE_KAARTEN = atl;

    document.body.innerHTML = `
        <button id="btnPlay">Play</button>
        <div id="speelveld"></div>
    `;

    for (let i = 0; i < 12; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "divKaart");
        document.getElementById("speelveld").appendChild(div);
        let img = document.createElement("img");
        img.setAttribute('src', "images/kaartAchterkant.jpg");
        img.setAttribute("alt", "kaart");
        img.setAttribute("class", "imgKaart");
        div.appendChild(img);
    }

    let btnPlay = document.getElementById("btnPlay");
    btnPlay.addEventListener("click", startGame)
    replayBtn();
}

const playSound = () => {
    let sound = new Audio("sounds/KaartOmdraaien.mp3");
    sound.play();
}

const startGame = () => {
    let btnPlay = document.getElementById("btnPlay");
    let kaarten = document.getElementsByClassName("imgKaart");
    btnPlay.parentNode.removeChild(btnPlay);

    let totaalKaarten = global.AANTAL_HORIZONTAAL * global.AANTAL_VERTICAAL;
    let images = ["kaart1.jpg", "kaart2.jpg", "kaart3.jpg", "kaart4.jpg", "kaart5.jpg", "kaart6.jpg"];

    let kaartData = [];
    for (let i = 0; i < totaalKaarten / global.AANTAL_GELIJKE_KAARTEN; i++) {
        for (let j = 0; j < global.AANTAL_GELIJKE_KAARTEN; j++) {
            kaartData.push("images/" + images[i % images.length]);
        }
    }
    kaartData = kaartData.sort(() => Math.random() - 0.5);

    for (let i = 0; i < kaarten.length; i++) {
        kaarten[i].setAttribute("data-src", kaartData[i]);
        kaarten[i].addEventListener("click", clicked);
    }
};

const clicked = (event) => {
    if (locked) return;
    let kaart = event.target;
    if (kaart.classList.contains("omgedraaid")) return;


    let omgedraaideKaarten = document.getElementsByClassName("omgedraaid");
    playSound();
    // als je nog kaarten moet omdraaien
    if (omgedraaideKaarten.length !== global.AANTAL_GELIJKE_KAARTEN - 1) {

        kaart.classList.add("omgedraaid");
        kaart.setAttribute("src", kaart.getAttribute("data-src"));
        // als atl kaarten gelijk is aan gelijke kaarten
    } else if (omgedraaideKaarten.length === global.AANTAL_GELIJKE_KAARTEN - 1) {
        kaart.classList.add("omgedraaid");
        kaart.setAttribute("src", kaart.getAttribute("data-src"));

        locked = true;
        let src = omgedraaideKaarten[0].getAttribute("src");
        let zelfde = true;
        for (let i = 0; i < omgedraaideKaarten.length; i++) {
            if (omgedraaideKaarten[i].getAttribute("src") !== src) {
                zelfde = false;
            }
        }
        // controleren of ze allemaal hetzelfde zijn
        if (zelfde) {
            for (let i = 0; i < omgedraaideKaarten.length; i++) {
                omgedraaideKaarten[i].parentElement.classList.add("juist");
            }
            setTimeout(() => {
                for (let i = 0; i < omgedraaideKaarten.length; i++) {
                    omgedraaideKaarten[i].parentElement.classList.remove("juist");
                }
                let omgedraaideKaartenArray = Array.from(omgedraaideKaarten);
                omgedraaideKaartenArray.forEach((kaart) => {
                    kaart.parentNode.removeChild(kaart);
                });


               /* for (let i = 0; i < omgedraaideKaarten.length; i++) {
                    omgedraaideKaarten[i].parentNode.removeChild(omgedraaideKaarten[i]);
                }
                //tweede gaat niet weg zonder dit??
                omgedraaideKaarten[0].parentNode.removeChild(omgedraaideKaarten[0]);*/

                locked = false;
            }, 1000);
            // als ze niet gelijk zijn
        } else {
            locked = true;
            for (let i = 0; i < omgedraaideKaarten.length; i++) {
                omgedraaideKaarten[i].parentElement.classList.add("fout");
            }
            setTimeout(() => {
                for (let i = 0; i < omgedraaideKaarten.length; i++) {
                    omgedraaideKaarten[i].parentElement.classList.remove("fout");
                }
                for (let i = 0; i < omgedraaideKaarten.length; i++) {
                    omgedraaideKaarten[i].setAttribute("src", "images/kaartAchterkant.jpg");
                }

                let omgedraaideKaartenArray = Array.from(omgedraaideKaarten);
                omgedraaideKaartenArray.forEach((kaart) => {
                    kaart.classList.remove("omgedraaid");
                });


                /*for (let i = 0; i < omgedraaideKaarten.length; i++) {
                    omgedraaideKaarten[i].classList.remove("omgedraaid");
                }
                omgedraaideKaarten[0].classList.remove("omgedraaid");*/
                locked = false;
            }, 1000);
        }
    }

}
const replayBtn = () => {
    let btnReplay = document.createElement("button");
    btnReplay.innerText = "Replay";
    btnReplay.setAttribute("id", "btnReplay");
    document.getElementsByTagName("body")[0].appendChild(btnReplay);
    btnReplay.addEventListener("click", () => {
        let alles = Array.from(document.body.children);
        alles.forEach((element) => {
            element.parentNode.removeChild(element);
        });
        let iets = "";
        let script = document.createElement("script");
        script.src = "scripts/code.js";
        script.type = "text/javascript";
        document.body.appendChild(script);

        setup();
    });
}
window.addEventListener("load", setup);