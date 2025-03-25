
let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};
let timerId = 0;
const setup = () => {
    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click", () =>{
        let sprite = document.getElementsByClassName("sprite")[0];
        sprite.addEventListener("click", move);
        sprite.addEventListener("click", change);
        timerId=setInterval(timerTick2, 1000);
    });
};
let timerTick2 = () =>{
    console.log("tick");
    move();
}
let move = (event) => {
  //alert("Clicked!");
    let sprite = document.getElementsByClassName("sprite")[0];
    let speelveld = document.getElementById("playField");

    let maxLeft = speelveld.clientWidth - sprite.offsetWidth;
    let maxHeight= speelveld.clientHeight - sprite.offsetHeight;

    // verplaats de sprite
    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    sprite.style.left=left+"px";
    sprite.style.top=top+"px";
}

let change = (event) => {
    let sprite = document.getElementsByClassName("sprite")[0];
    let image = Math.floor(Math.random()*5);
    sprite.setAttribute("src", "images/" + image+".png");
}



window.addEventListener("load", setup);


