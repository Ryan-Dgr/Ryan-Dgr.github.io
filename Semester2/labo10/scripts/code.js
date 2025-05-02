const setup = () => {
    let btnGo = document.querySelector('#btnGo');
    btnGo.addEventListener('click', clicked);
    restoreHistory();
}

const clicked = () =>{
    let input = document.querySelector('.search-bar>input').value;
    let command = input.substring(0, 3);
    let search = input.substring(3);
    if(CommandIsValid(command)){
        if(command === "/g "){
           getGoogle(search);
        }else if(command === "/y "){
            getYoutube(search);
        }else if(command === "/x "){
            getX(search);
        }else if(command === "/i "){
           getInstagram(search);
        }else{
            alert("fout");
        }
    }else{
        alert("Invalid command");
    }
}

const getGoogle = (search) =>{
    let url = "https://www.google.com/search?q=" + search;
    createCardAndAppend("Google", search, url);
    window.open(url, "_blank");
    storeHistory();
}
const getYoutube = (search) =>{
    let url = "https://www.youtube.com/results?search_query=" + search;
    createCardAndAppend("Youtube", search, url);
    window.open(url, "_blank");
    storeHistory();
}
const getX = (search) =>{
    let url = "https://x.com/hashtag/" + search;
    createCardAndAppend("X", search, url);
    window.open(url, "_blank");
    storeHistory();
}
const getInstagram = (search) =>{
    let url = "https://www.instagram.com/explore/tags/" + search;
    createCardAndAppend("Instagram", search, url);
    window.open(url, "_blank");
    storeHistory();
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
    col4.classList.add("history-card");
    col4.setAttribute("data-title", title);
    col4.setAttribute("data-text", commandoSuffix);
    col4.setAttribute("data-url", url);
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

const storeHistory = () =>{
    let history = [];
    let elHistory = document.querySelectorAll(".history-card");
    elHistory.forEach((item) => {
        history.push({
            title: item.getAttribute("data-title"),
            text: item.getAttribute("data-text"),
            url: item.getAttribute("data-url")
        })
    })
    console.log(history);
    localStorage.setItem("history", JSON.stringify(history));
}

const restoreHistory =() =>{
    let jsonText = localStorage.getItem("history");
    console.log(jsonText);
    if(jsonText !== null){
        let history = JSON.parse(jsonText);
        for(let i = 0; i < history.length; i++){
            let item = history[i];
            createCardAndAppend(item.title, item.text, item.url);
        }
    }
}

window.addEventListener("load", setup);