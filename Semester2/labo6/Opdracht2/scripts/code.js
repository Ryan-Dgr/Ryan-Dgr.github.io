const setup = () => {
    let li = document.querySelectorAll('li');

    for (let i = 0; i < li.length; i++) {
        li[i].setAttribute('class', 'listitem');
        li[i].setAttribute('style', 'color: red');

    }

    let element = document.createElement('img');
    element.setAttribute('src', 'https://redactie.rtl.nl/sites/default/files/ANP130224061-1.jpg?itok=lnZN81fp&offsetX=0&offsetY=23&cropWidth=1022&cropHeight=575&width=1024&height=576&impolicy=dynamic');
    let body = document.querySelector('body');
    body.appendChild(element);
}
window.addEventListener("load", setup);