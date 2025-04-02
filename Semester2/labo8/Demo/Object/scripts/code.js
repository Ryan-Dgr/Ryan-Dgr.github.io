const setup = () => {
    let student = {}; // een leeg object
    student.firstName = "John";
    student.lastName = "Doe";
    student.age = new Date (2000,1,1);
    student.eyeColor = "blue";

    console.log (student.firstName);

    let student1 = {
        firstName: "John",
        lastName: "Doe",
        age: new Date(2001,8 , 11),

    }
    console.log(student1.age);

    let tekst = JSON.stringify(student1);
    console.log(tekst);


}
window.addEventListener("load", setup);