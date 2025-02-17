const setup = () => {

    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", doSubstring);

}
const doSubstring = () => {
    let txtInput = document.getElementById('txtInput').value;
    let txtNum1 = parseInt(document.getElementById('txtNum1').value);
    let txtNum2 = parseInt(document.getElementById('txtNum2').value);
    let txtOutput = document.getElementById('txtOutput');

    txtOutput.innerText = txtInput.substring(txtNum1, txtNum2);
}

window.addEventListener("load", setup);