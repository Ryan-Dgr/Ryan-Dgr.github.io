const setup = () => {
    let stop = false;
    let gemeentes = [];
    while(!stop){
       let input = prompt("geef gemeente");
       if(input === "stop"){
           stop = true;
       }else{
           gemeentes.push(input);
       }
    }
    gemeentes.sort((a,b) => a - b);

    let keuzelijst = document.getElementById("gemeente");
    let output = "";
    for(let i = 0; i < gemeentes.length; i++){
        output += "<option value='"+gemeentes[i]+"'>"+gemeentes[i]+"</option>";
    }

    keuzelijst.innerHTML = output;


}
window.addEventListener("load", setup);