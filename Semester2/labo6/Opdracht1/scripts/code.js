const setup = () => {
    let element = document.querySelectorAll("p")[0];
    let y = element.childNodes[0];
    element.removeChild(y);

    let tekstNode = document.createTextNode("Good Job!");

    element.appendChild(tekstNode);
}
window.addEventListener("load", setup);