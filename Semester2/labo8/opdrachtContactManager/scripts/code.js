let personen = [
    {
        voornaam: "Jan",
        naam: "Janssens",
        geboortedatum: "1985-03-12",
        email: "jan.janssens@example.com",
        aantalKinderen: 2
    },
    {
        voornaam: "Lisa",
        naam: "Peeters",
        geboortedatum: "1992-07-25",
        email: "lisa.peeters@example.com",
        aantalKinderen: 0
    },
    {
        voornaam: "Tom",
        naam: "Vermeulen",
        geboortedatum: "1978-11-05",
        email: "tom.vermeulen@example.com",
        aantalKinderen: 3
    }
];

let index = -1;


const bewaarBewerktePersoon = () => {
    if(!valideer()){
        console.log("validatie niet goed");
        return;
    }
    let lijst = document.getElementById("lstPersonen");

    let persoon = {
        voornaam: document.getElementById("txtVoornaam").value,
        naam: document.getElementById("txtFamilienaam").value,
        geboortedatum: document.getElementById("txtGeboorteDatum").value,
        email: document.getElementById("txtEmail").value,
        aantalKinderen: document.getElementById("txtAantalKinderen").value,
    }

    // als het een nieuwe persoon is
    if(index === -1){
        console.log("index: " + index + " dus nieuwe persoon");
        let option = document.createElement("option");
        option.value = personen.length.toString();
        option.textContent = persoon.voornaam + " " + persoon.naam;
        lijst.appendChild(option);
        personen.push(persoon);
        index = personen.length -1;

        // als persoon al bestaat gewoon bewerken
    }else{
        console.log("index: " + index + " dus bestaand persoon");
        personen[index] = persoon;
        lijst.options[index].textContent = persoon.voornaam + " " + persoon.naam;
    }


};

const bewerkNieuwePersoon = () => {
    let inputElem = document.querySelectorAll("input[type=text]");

    inputElem.forEach((elem) => {
        elem.value = "";
    })

    document.getElementById("lstPersonen").selectedIndex = -1;

    index = -1;

};

const bewerkGeselecteerdePersoon = () => {
    clearAllErrors();
    let option = document.getElementById("lstPersonen").value;
    let pers = personen[option];
    //index zetten op value van de geselecteerde persoon
    index = option;

    document.getElementById("txtVoornaam").value = pers.voornaam;
    document.getElementById("txtFamilienaam").value = pers.naam;
    document.getElementById("txtGeboorteDatum").value = pers.geboortedatum;
    document.getElementById("txtEmail").value = pers.email;
    document.getElementById("txtAantalKinderen").value = pers.aantalKinderen;

}


const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", bewerkGeselecteerdePersoon);

    let lijst = document.getElementById("lstPersonen");

    for(let i = 0; i < personen.length; i++) {
        let option = document.createElement("option");
        option.value = i.toString();
        option.innerText = personen[i].voornaam + " " + personen[i].naam;
        lijst.appendChild(option);
    }

};

window.addEventListener("load", setup);