const setup = () => {
    let form = document.querySelector("form");
    form.addEventListener("submit", metIndexOf);
    form.addEventListener("submit", metLastIndexOf);
};
const metIndexOf = (event) => {
    event.preventDefault();
    let input = document.getElementById("input").value.trim().toLowerCase();
    let aantal = 0;
    let index = input.indexOf("an");

    while (index !== -1) {
        aantal++;
        index = input.indexOf("an", index + 1);
    }

    console.log("aantal met index of: " + aantal);
};


const metLastIndexOf = (event) =>{
    event.preventDefault();
    let input = document.getElementById("input").value.trim().toLowerCase();
    let aantal = 0;
    let index = input.lastIndexOf("an");

    while (index !== -1) {
        aantal++;
        index = input.lastIndexOf("an"); // 1 an teveel
        input = input.substring(0, index);
    }


    console.log("aantal met last index of: " + (aantal-1));
}
window.addEventListener("load", setup);
