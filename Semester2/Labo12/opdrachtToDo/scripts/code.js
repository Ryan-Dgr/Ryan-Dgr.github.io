tasks = [];

const setup = () => {
    let btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click", voegTaakToe);
    restoreTasks();
    saveAndRender();
    document.querySelectorAll(".column").forEach(col => {
        col.addEventListener("dragover",  e => {
            e.preventDefault();
        })
        col.addEventListener("drop", e => {
            e.preventDefault();
            const id = e.dataTransfer.getData("text/plain");
            const draggedElement = document.getElementById(id);
            col.appendChild(draggedElement);
            draggedElement.setAttribute("data-status", col.getAttribute("data-status"));

            tasks.forEach(task => {
                if(task.createdAt.toString() === draggedElement.getAttribute("id")) {
                    task.status = col.getAttribute("data-status");
                }
            })
            //restoreTasks();
            //saveAndRender();
        })
    })
}
const voegTaakToe = () => {
    let title = document.getElementById("txtTitle").value.trim();
    let description = document.getElementById("txtDescription").value.trim();

    const task = {
        title: title,
        description: description,
        createdAt: new Date(),
        status:"todo"
    }
    tasks.push(task);
    storeTasks();
    saveAndRender();

}
const saveAndRender = () => {
    document.getElementById("todo").innerHTML = "<h3>To Do</h3>";
    document.getElementById("inprogress").innerHTML = "<h3>In Progress</h3>";
    document.getElementById("done").innerHTML = "<h3>Done</h3>";
    for(let i = 0; i< tasks.length; i++){
        let task = tasks.at(i);
        createTaak(task.title, task.description, task.status, task.createdAt);
    }
}

const storeTasks = () =>{
    localStorage.setItem("ToDo", JSON.stringify(tasks));
}
const restoreTasks = () =>{
    let json = localStorage.getItem("ToDo");
    tasks = [];
    if(json !== null){
        let taken = JSON.parse(json);
        for(let i = 0; i < taken.length; i++){
            tasks.push(taken[i]);
        }

    }
}

const createTaak = (title, description, status, createdAt) =>{
    let div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("data-status", status);
    div.setAttribute("draggable", "true");
    div.setAttribute("id", createdAt)

    div.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text/plain", e.target.id);
        console.log(e.target.id)
    })

    let h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode(title));
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(description));
    let tijd = document.createElement("p");
    tijd.appendChild(document.createTextNode(new Date(createdAt).toLocaleDateString()));


    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(tijd);

    document.getElementById(status).appendChild(div);

}
window.addEventListener("load", setup);