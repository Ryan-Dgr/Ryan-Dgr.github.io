const setup = () => {
    let foto = document.getElementById('foto');
    foto.addEventListener("mouseover", verander);
}
const verander = () => {
    let foto = document.getElementById('foto');
    foto.src="./images/nf.jpg";
    foto.alt="nf";
}
window.addEventListener("load", setup);