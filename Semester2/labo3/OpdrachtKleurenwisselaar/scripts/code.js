const setup = () => {
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    btn1.addEventListener('click', kleurWisselaar);
    btn2.addEventListener('click', kleurWisselaar);
    btn3.addEventListener('click', kleurWisselaar);
}

const kleurWisselaar = (event) =>{
    let btn = event.target;
    if(btn.classList.contains('blauw')){
        btn.classList.remove('blauw');
    }else{
        btn.classList.add('blauw');
    }
}
window.addEventListener("load", setup);