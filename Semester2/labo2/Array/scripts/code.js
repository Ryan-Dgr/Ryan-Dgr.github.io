const setup = () => {
    let familie = ['familielid 1', 'familielid 2', 'familielid 3', 'familielid 4', 'familielid 5'];
    console.log(familie.length);
   VoegNaamToe(familie);
    console.log(familie[5]);
}

function VoegNaamToe(namenArray) {
    let nieuweNaam = prompt("Voer een extra naam in:");
    namenArray.push(nieuweNaam);
}
window.addEventListener("load", setup);