const setup = () => {
    let btnValideer=document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
    valideerVoornaam();
    valideerNaam();
    valideerDatum();
    valideerEmail();
    valideerAtlKinderen();
};

const valideerVoornaam = () => {
    let Voornaam = document.getElementById("voornaam");
    let errVoornaam = document.getElementById("errVoornaam");
    let voornaam = Voornaam.value.trim();
    if (voornaam.length > 30) {
        Voornaam.className="invalid"; // invalid class instellen
        errVoornaam.innerHTML = "max. 30 karakters";
    } else {
        Voornaam.className=""; // alle classes verwijderen
        errVoornaam.innerHTML = "";

    }
};

const valideerNaam = () => {
    let txtNaam = document.getElementById("naam");
    let errNaam = document.getElementById("errNaam");
    let naam = txtNaam.value.trim();
    if (naam.length === 0) {
        txtNaam.className="invalid";
        errNaam.innerHTML = "Required!";
    }else if(naam.length > 50){
        txtNaam.className="invalid";
        errNaam.innerHTML = "max. 50 karakters";
    }else{
        txtNaam.className="";
        errNaam.innerHTML = "";
    }
}
const valideerDatum = () => {
    let dtDatum = document.getElementById("geboortedatum");
    let errDatum = document.getElementById("errDatum");
    let datum = dtDatum.value.toString();
    let gesplitst = datum.split("-");
    let jaar = gesplitst[0];
    let maand = gesplitst[1];
    let dag = gesplitst[2];
    if(datum.length === 0){
        errDatum.innerHTML = "datum is verplicht";
    }else if (jaar.length !== 4){
        errDatum.innerHTML = "jaar niet correct";
    }else if(maand.length !== 2 || maand <= 0){
        errDatum.innerHTML = "maand niet correct";
    }else if(dag.length !== 2 || dag <= 0){
        errDatum.innerHTML = "dag niet correct";
    }else{
        errDatum.innerHTML = "";
    }
}

const valideerEmail = () =>{
    let txtEmail = document.getElementById("email");
    let errEmail = document.getElementById("errEmail");
    let email = txtEmail.value.trim();

    if(email.length === 0){
        txtEmail.className="invalid";
        errEmail.innerHTML = "email address is required";
    }else if(email.split("@").length - 1 > 1){
        txtEmail.className="invalid";
        errEmail.innerHTML = "multiple @'s";
    }else if(email.indexOf("@") === 0 || email.indexOf("@") === email.length -1 ){
        txtEmail.className="invalid";
        errEmail.innerHTML = "geen geldig email adres";
    }else{
        txtEmail.className="";
        errEmail.innerHTML = "";
    }

}

const valideerAtlKinderen = () =>{
    let numAtlKinderen = document.getElementById("atlKinderen");
    let errAtlKinderen = document.getElementById("errAtlKinderen");
    let atlKinderen = numAtlKinderen.value;


    if(!isGetal(atlKinderen)){
        numAtlKinderen.className="invalid";
        errAtlKinderen.innerHTML = "geen getal";
    }else if(atlKinderen < 0){
        numAtlKinderen.className="invalid";
        errAtlKinderen.innerHTML = "is geen positief getal";
    }else if(atlKinderen > 99){
        numAtlKinderen.className="invalid";
        errAtlKinderen.innerHTML = "te vruchtbaar";
    }else{
        numAtlKinderen.className="";
        errAtlKinderen.innerHTML = "";
    }

}
const isGetal = (tekst) =>{
    return !isNaN(tekst);
}



window.addEventListener("load", setup);