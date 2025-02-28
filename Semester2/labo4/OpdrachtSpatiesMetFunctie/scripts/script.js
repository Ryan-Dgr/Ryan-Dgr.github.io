const setup = () => {
    let form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let input = document.getElementById('input').value;
        let output = maakMetSpaties(input);
        console.log(output);
    });
};

const maakMetSpaties = (inputText) => {
    let trimmedInput = inputText.trim();
    let result = "";

    for (let i = 0; i < trimmedInput.length; i++) {
        if (trimmedInput.charAt(i) !== ' ') {
            result += trimmedInput.charAt(i) + " ";
        }
    }
    return result.trim();
};

window.addEventListener("load", setup);
