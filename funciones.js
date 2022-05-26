let arrayTareas=[];

function guardarTarea() {
    let tarea= document.getElementById("item").value;
    arrayTareas.push(tarea)

    const node = document.createElement("li");
    node.innerHTML += `<input type="checkbox" id="check" onclick="tachar()"> ${tarea}</input>`

    document.getElementById("lista").appendChild(node);
}
function tachar(){
    const c = document.getElementById("check").value
    console.log(c);

    const tarea = document.getElementById("item").value
    console.log(tarea)
    /*if (tarea.checked){
        document.getElementById("item").style.textDecoration='line-through';
    }*/

    if(c === "on") {
        document.getElementById("item").style.textDecoration='line-through';
       
    }
}
