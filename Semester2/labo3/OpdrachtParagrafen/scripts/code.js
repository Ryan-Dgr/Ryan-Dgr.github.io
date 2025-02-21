const setup = () => {
    let ps = document.getElementsByTagName("p");
    for(let i = 1; i < ps.length; i+=2) {
            ps[i].className += " opvallend";
    }
}
window.addEventListener("load", setup);