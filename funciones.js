let arrayTareas=[];
let num = 0;

function guardarTarea() {
    let tarea={
        id: num,
        titulo: document.getElementById("item").value,
        estado: false
    }
    if (tarea.titulo == ""){
        alert("Ingrese una tarea")
    }
    else {
        arrayTareas.push(tarea)
        console.log(tarea.titulo)
        let ul = document.getElementById("lista")
        ul.innerHTML += `<li class= "text-capitalize"><input type="checkbox" id="${num}"onclick="done(id)"> ${tarea.titulo}</input></li>`
        document.getElementById("item").value="";
        num++; 
    }
}
let done=(id)=>{
    arrayTareas[id].estado = true;
    tachar();
}
function tachar(){
    let ul=document.getElementById("lista")
    document.getElementById("lista").innerHTML = "";
    for(let i = 0; i<arrayTareas.length; i++){
        if(arrayTareas[i].estado){
            ul.innerHTML+=`<div class="checked">
            <li class= "text-capitalize"><input type="checkbox" id="${arrayTareas[i].id}" checked disabled="disabled" onclick=done(id)> ${arrayTareas[i].titulo}</input></li>
            </div>`
        }else{
            ul.innerHTML+=`<div class="notchecked">
            <li class= "text-capitalize"><input type="checkbox" id="${arrayTareas[i].id}" onclick=done(id)><h10> ${arrayTareas[i].titulo} </h10>
            </input></li>
            </div>`
        }
    }
}

