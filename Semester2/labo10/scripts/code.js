const setup = () => {
    let btnGo = document.querySelector('#btnGo');
    btnGo.addEventListener('click', clicked);
}

const clicked = () =>{
    let input = document.querySelector('.search-bar>input').value;
    let command = input.substring(0, 3);
    let search = input.substring(3);
    if(CommandIsValid(command)){
        if(command === "/g "){
            createCardAndAppend("Google", search, "https://www.google.com/search?q=" + search);
            window.open("https://www.google.com/search?q=" + search, "_blank");
        }else if(command === "/y "){
            createCardAndAppend("Youtube", search, "https://www.google.com/search?q=" + search);
            window.open("https://www.youtube.com/results?search_query=" + search, "_blank");
        }else if(command === "/x "){
            createCardAndAppend("X", search, "https://www.google.com/search?q=" + search);
            window.open("https://x.com/hashtag/" + search, "_blank");
        }else if(command === "/i "){
            createCardAndAppend("Instagram", search, "https://www.google.com/search?q=" + search);
            window.open("https://www.instagram.com/explore/tags/" + search, "_blank");
        }else{
            alert("fout");
        }
    }else{
        alert("Invalid command");
    }
}

const CommandIsValid = (command) =>{
    return command === "/g " || command === "/y " || command === "/x " || command === "/i ";
}
const createElementWithClassName = (element, className) =>{
    let el = document.createElement(element);
    el.setAttribute("class", className);
    return el;
}
const createElementWithClassNameAndText = (element, className, text) =>{
    let el = createElementWithClassName(element, className);
    el.appendChild(document.createTextNode(text));
    return el;
}
const createLinkButton = (url) =>{
    let linkGo = document.createElement("a");
    linkGo.setAttribute("href", url);
    linkGo.setAttribute("target", "_blank");
    linkGo.setAttribute("class", "btn btn-dark");
    linkGo.appendChild(document.createTextNode("Go!"));
    return linkGo;
}
const createCardAndAppend = (title, commandoSuffix, url) =>{
    let col4 = createElementWithClassName("div", "col-4");
    let card = createElementWithClassName("div", "card");
    card.classList.add(title.toLowerCase() + "-card");
    card.classList.add("bg-primary");
    let cardBody = createElementWithClassName("div", "card-body");
    let cardTitle = createElementWithClassNameAndText("h5", "card-title", title);
    let cardText = createElementWithClassNameAndText("p", "card-text", commandoSuffix);
    let btnGo = createLinkButton(url);

    col4.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(btnGo);
    let row = document.querySelector(".history-section");
    row.appendChild(col4);
}



window.addEventListener("load", setup);