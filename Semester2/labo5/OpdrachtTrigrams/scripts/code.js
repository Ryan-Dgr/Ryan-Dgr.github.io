const setup = () => {
    let btnSubmit = document.getElementById("btnSubmit");

    btnSubmit.addEventListener("click", trigram);


}

const trigram = () =>{
    let woord = document.getElementById("input").value;
    let lijst = document.getElementById("lijst");
    let trigrams = getTrigrams(woord);
    let output = "";
    for(let i = 0; i< trigrams.length; i++){
        output+="<li>"+trigrams[i]+"</li>";
    }
    lijst.innerHTML = output;
}
const getTrigrams=(woord)=>{
    let result=[];
    let trigram;
    for(let i=0;i< woord.length-2;i++){
        trigram=woord.slice(i, i+3);
        result.push(trigram);
    }
    return result;
}


window.addEventListener("load", setup);