let pendientes = [];
let realizadas = [];

function mostrarTareas() {
    pendientesCount.textContent = pendientes.length;
    realizadasCount.textContent = realizadas.length;
    pendientesList.innerHTML = pendientes.map((t,i) =>
        `<div class="task-box" onclick="realizar(${i})">${t.nombre} – Prioridad: ${t.prioridad}</div>`
    ).join('');
    realizadasList.innerHTML = realizadas.map((t,i) =>
        `<div class="realizadas-box" onclick="pendiente(${i})">${t.nombre} – Prioridad: ${t.prioridad}</div>`
    ).join('');
}

function agregarTarea() {
    let nombre = prompt("Nombre de la tarea:");
    let prioridad = prompt("Prioridad (Alta, Media, Baja):");
    if(nombre && prioridad) pendientes.push({nombre, prioridad}); mostrarTareas();
}

function realizar(i){ realizadas.push(pendientes[i]); pendientes.splice(i,1); mostrarTareas();}
function pendiente(i){ pendientes.push(realizadas[i]); realizadas.splice(i,1); mostrarTareas();}

const pendientesCount = document.getElementById("pendientes-count");
const realizadasCount = document.getElementById("realizadas-count");
const pendientesList = document.getElementById("pendientes-list");
const realizadasList = document.getElementById("realizadas-list");

mostrarTareas();
