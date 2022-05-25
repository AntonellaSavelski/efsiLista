let arrayTareas=[];

function guardarTarea() {
    let tarea={
        titulo: document.getElementById("item").value,
        estado: false
    } 
    arrayTareas.push(tarea)

    const node = document.createElement("li");
    node.innerHTML += `<input type="checkbox"> ${tarea.titulo}</input>`
    if (tarea.estado=false){
        node.innerHTML += `style:"text-decoration";"line-through")`;
    }
    document.getElementById("lista").appendChild(node);
}
function tachar(){
        const tarea = document.getElementById("item").value
        console.log(tarea)
        if (tarea.checked){
             $todoText.css("text-decoration","line-through");
        }      
}
