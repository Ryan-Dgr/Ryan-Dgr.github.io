const setup = () => {
    let btnCalculate = document.getElementById('btnCalculate');
    btnCalculate.addEventListener("click", calculate);

}

const calculate = () => {
    let names = document.getElementsByClassName('name');
    let prices = document.getElementsByClassName('price');
    let numbers = document.getElementsByClassName('number');
    let btws = document.getElementsByClassName('btw');
    let subtotals = document.getElementsByClassName('subtotal');
    let lbltotaal = document.getElementById('total');
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        let prijs = parseFloat(prices[i].innerText.trim().replace(" Eur", ""));
        let aantal = parseFloat(numbers[i].value);
        let btw = parseFloat(btws[i].innerText.trim().replace("%", "")) / 100;

        let subtotaal = (aantal * prijs) * (1 + btw);
        total += subtotaal;
        subtotals[i].innerText = `${subtotaal.toFixed(2)} Eur`;
    }

    lbltotaal.innerText = total.toFixed(2) + " Eur";


}
window.addEventListener("load", setup);