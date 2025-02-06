/*
    JavaScript general de gestion.html

*/


/* #############################
   ###   Elementos del DOM   ###
   ###########################*/

// Modal Añadir Cassette
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalOverlay = document.getElementById("modal-overlay");

const descripcionInput = document.getElementById("descripcionInput");
const fechaInput = document.getElementById("fechaInput");
const organoInput = document.getElementById("organoInput");

const cassetteForm = document.getElementById("cassetteForm");
const cassetteTableBody = document.getElementById("cassetteTableBody");
const errorMessage = document.getElementById("error-message");

// Botones Cassette
const ordenarFechaBtn = document.getElementById("ordenarFecha");
const ordenarDescripcionBtn = document.getElementById("ordenarDescripcion");
const ordenarOrganoBtn = document.getElementById("ordenarOrgano");

// Inputs y select Header
const filtrarOrgano = document.getElementById("filtrarOrgano");
const fechaInicio = document.getElementById("fechaInicio");
const fechaFin = document.getElementById("fechaFin");

// Detalle del cassette
const detalleDescripcion = document.getElementById("descripcion");
const detalleFecha = document.getElementById("fecha");
const detalleOrgano = document.getElementById("organo");
const detalleCaracteristicas = document.getElementById("caracteristicas");
const detalleObservaciones = document.getElementById("observaciones");

let ordenAscendente = true;


/* ###############################################
   ###   Funcines del Modal Añadir Cassettes   ###
   #############################################*/

// Función para abrir el modal de añadir cassettes
const abrirModal = () => {
    modalOverlay.classList.remove("hidden");
    modal.classList.remove("hidden");
    setTimeout(() => {
        modalContent.classList.remove("scale-95", "opacity-0");
    }, 10);
};

// Función para cerrar el modal
const cerrarModal = () => {
    modalContent.classList.add("scale-95", "opacity-0");
    setTimeout(() => {
        modalOverlay.classList.add("hidden");
        modal.classList.add("hidden");
        errorMessage.textContent = "";
    }, 300);
};

// Función para validar y enviar formulario del modal de añadir cassettes
const enviarFormulario = (event) => {
    event.preventDefault();

    const descripcion = descripcionInput.value.trim();
    const fecha = fechaInput.value.trim();
    const organo = organoInput.value.trim();

    // Verificación de los campos obligatorios
    if (!descripcion || !fecha || !organo) {
        errorMessage.textContent = "Rellena los campos obligatorios";
        return;
    }

    // Crear línea con los datos insertados
    const newRow = document.createElement("tr");
    newRow.classList.add("border-b");
    newRow.innerHTML = `
        <td class="p-2">${fecha}</td>
        <td class="p-2">${descripcion}</td>
        <td class="p-2">${organo}</td>
        <td class="p-2">
            <div class="relative w-8 h-8 text-teal-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-teal-600 icono hover:text-teal-400 active:text-teal-700" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"></path>
                </svg>
            </div>
        </td>
    `;

    cassetteTableBody.appendChild(newRow);
    cerrarModal();
    cassetteForm.reset();
};


/* ################################
   ###   Funciones del Header   ###
   ##############################*/

//! Revisar funcionamiento
// Función para filtrar la tabla por órgano
const filtrarPorOrgano = () => {
    let filtro = filtrarOrgano.value;
    let filas = Array.from(cassetteTableBody.children);

    filas.forEach(fila => {
        let organo = fila.cells[2].textContent;
        fila.style.display = (filtro === "" || organo === filtro) ? "" : "none";
    });
};
//! Revisar funcionamiento
// Función para filtrar por fecha o rango de fechas
const filtrarPorFecha = () => {
    let fechaInicial = fechaInicio.value ? new Date(fechaInicio.value) : null;
    let fechaFinal = fechaFin.value ? new Date(fechaFin.value) : null;

    let filas = Array.from(cassetteTableBody.children);

    filas.forEach(fila => {
        let fechaCassette = new Date(fila.cells[0].textContent);

        // Si solo hay fecha de inicio, mostrar solo esa fecha exacta
        if (fechaInicial && !fechaFinal) {
            fila.style.display = fechaCassette.toDateString() === fechaInicial.toDateString() ? "" : "none";
        }
        // Si hay fecha de inicio y fecha de fin, mostrar el rango
        else if (fechaInicial && fechaFinal) {
            let enRango = fechaCassette >= fechaInicial && fechaCassette <= fechaFinal;
            fila.style.display = enRango ? "" : "none";
        } 
        // Si no hay fecha seleccionada, mostrar todo
        else {
            fila.style.display = "";
        }
    });
};

/* ################################
   ###   Funciones de Cassette  ###
   ##############################*/

// Función para ordenar cualquier columna
//! Dar una vuelta a esto
const ordenarTabla = (columna) => {
    let filas = Array.from(cassetteTableBody.children);

    filas.sort((a, b) => {
        let valorA = a.cells[columna].textContent.toLowerCase();
        let valorB = b.cells[columna].textContent.toLowerCase();

        return ordenAscendente ? valorA.localeCompare(valorB) : valorB.localeCompare(valorA);
    });

    ordenAscendente = !ordenAscendente;
    cassetteTableBody.innerHTML = "";
    filas.forEach(fila => cassetteTableBody.appendChild(fila));
};


/* ###########################
   ###   Event Listeners   ###
   #########################*/

// Event Listeners para los inputs de fecha
fechaInicio.addEventListener("change", filtrarPorFecha);
fechaFin.addEventListener("change", filtrarPorFecha);

// Event Listeners para el modal de añadir cassettes
openModalBtn.addEventListener("click", abrirModal);
closeModalBtn.addEventListener("click", cerrarModal);
cassetteForm.addEventListener("submit", enviarFormulario);

// Event Listener para ordenar cassettes en el Header
filtrarOrgano.addEventListener("change", filtrarPorOrgano);
fechaInicio.addEventListener("change", filtrarPorFecha);
fechaFin.addEventListener("change", filtrarPorFecha);

// Event Listener para ordenar cassettes en la cabecera de cassettes
ordenarFechaBtn.addEventListener("click", () => ordenarTabla(0));
ordenarDescripcionBtn.addEventListener("click", () => ordenarTabla(1));
ordenarOrganoBtn.addEventListener("click", () => ordenarTabla(2));

