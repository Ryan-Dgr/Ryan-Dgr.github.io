const setup = () => {
    let btnWjzig = document.getElementById("btnWijzig");
    btnWijzig.addEventListener("click", Wijzigen);

}
const Wijzigen = () => {
    let txtOutput = document.getElementById("txtOutput");
    txtOutput.innerText = 'Welkom!';
}
window.addEventListener("load", setup);