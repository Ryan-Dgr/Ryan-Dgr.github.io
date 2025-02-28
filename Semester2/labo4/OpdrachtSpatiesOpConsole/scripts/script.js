const setup = () => {
    let form = document.querySelector('form');
    form.addEventListener('submit', geklikt);
}
const geklikt =  (event) => {
    event.preventDefault();
    let input = document.getElementById('input').value.trim();
    let result = "";

    for (let i = 0; i < input.length; i++) {
        if(input.charAt(i) !== ' '){
            result += input.charAt(i) + " ";
        }
    }



    console.log(result);
}
window.addEventListener("load", setup);