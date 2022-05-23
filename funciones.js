let arrayTareas=[];

function guardarTarea() {
    let tarea = document.getElementById("tarea").value
    arrayTareas.push(tarea)

    const node = document.createElement("li");
    const textnode = document.createTextNode(tarea);
    node.appendChild(textnode);
    document.getElementById("lista").appendChild(node);
    }