const setup = () => {
    let start = new Date("2025-04-01T12:10:30");
    console.log(start);

    console.log(start.getDay());
    console.log(start.getMonth()+1);
    console.log(start.getFullYear());

    let datum = new Date(2005, 6, 7);

    console.log(datum);

    let event= new Date();

    console.log((start - datum)/1000/60/60/24);

}
window.addEventListener("load", setup);