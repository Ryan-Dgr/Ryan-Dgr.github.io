let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6
}
let locked = false;

const setup = () => {
    /*//volledige speelveld maken met alle kaarten
    let btn = document.createElement('button');
    btn.setAttribute('id', 'btnPlay');
    btn.innerText = 'Play';
    document.body.appendChild(btn);
    let div = document.createElement('div');
    div.setAttribute('id', 'speelveld');
    document.body.appendChild(div);*/

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
}

const startGame = () => {
    let btnPlay = document.getElementById("btnPlay");
    let kaarten = document.getElementsByClassName("imgKaart");
    btnPlay.parentNode.removeChild(btnPlay);

    let images = ["kaart1.jpg", "kaart2.jpg", "kaart3.jpg", "kaart4.jpg", "kaart5.jpg",
        "kaart6.jpg","kaart1.jpg", "kaart2.jpg", "kaart3.jpg", "kaart4.jpg", "kaart5.jpg", "kaart6.jpg"];
    for (let i = 0; i < 12; i++) {
        let rnd = Math.floor(Math.random() * images.length);
        kaarten[i].setAttribute("data-src", "images/" + images[rnd]);
        images.splice(rnd, 1);
        kaarten[i].addEventListener("click", clicked);
    }
}

const clicked = (event) => {
    if (locked) return;
    let kaart = event.target;
    if (kaart.classList.contains("omgedraaid")) return;

    let omgedraaideKaarten = document.getElementsByClassName("omgedraaid");
        //eerste kaart omdraaien
        if (omgedraaideKaarten.length === 0) {

            kaart.classList.add("omgedraaid");
            kaart.setAttribute("src", kaart.getAttribute("data-src"));

            //tweede kaart omdraaien
        } else if (omgedraaideKaarten.length === 1) {

            kaart.classList.add("omgedraaid");
            kaart.setAttribute("src", kaart.getAttribute("data-src"));
            locked = true;
            let eerste = omgedraaideKaarten[0];
            let tweede = omgedraaideKaarten[1];

            //als 2 dezelfde
            if (eerste.getAttribute("src") === tweede.getAttribute("src")) {
                eerste.parentElement.classList.add("juist");
                tweede.parentElement.classList.add("juist");

                setTimeout(() => {

                    eerste.parentElement.classList.remove("juist");
                    tweede.parentElement.classList.remove("juist")
                    eerste.parentNode.removeChild(eerste);
                    tweede.parentNode.removeChild(tweede);

                    locked = false;
                }, 1000);

                setTimeout(() => {
                    if (document.getElementsByClassName("imgKaart").length === 2) {
                        replayBtn();
                    }
                })

            } else {
                locked = true;
                eerste.parentElement.classList.add("fout");
                tweede.parentElement.classList.add("fout");
                setTimeout(() => {
                    eerste.parentElement.classList.remove("fout");
                    tweede.parentElement.classList.remove("fout");
                    eerste.setAttribute("src", "images/kaartAchterkant.jpg");
                    tweede.setAttribute("src", "images/kaartAchterkant.jpg");
                    eerste.classList.remove("omgedraaid");
                    tweede.classList.remove("omgedraaid");
                    locked = false;
                }, 1000);
            }
        }

const replayBtn = () => {
            let btnReplay = document.createElement("button");
            btnReplay.innerText = "Replay";
            document.getElementsByTagName("body")[0].appendChild(btnReplay);
            btnReplay.addEventListener("click", () => {
                let alles = Array.from(document.body.children);
                alles.forEach((element) => {
                    element.parentNode.removeChild(element);
                });

                let script = document.createElement("script");
                script.src = "scripts/code.js";
                script.type = "text/javascript";
                document.body.appendChild(script);

                setup();
            });
        }



}
window.addEventListener("load", setup);