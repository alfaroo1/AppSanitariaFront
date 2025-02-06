/*
    JavaScript de gestion.html
*/

// Cargar elementos del DOM
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalOverlay = document.getElementById("modal-overlay");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const cassetteForm = document.getElementById("cassetteForm");
const cassetteTableBody = document.getElementById("cassetteTableBody");
const errorMessage = document.getElementById("error-message");

const descripcionInput = document.getElementById("descripcionInput");
const fechaInput = document.getElementById("fechaInput");
const organoInput = document.getElementById("organoInput");

// Función para abrir añadir Cassettes
const abrirModal = () => {
    modalOverlay.classList.remove("hidden");
    modal.classList.remove("hidden");

    setTimeout(() => {
        modalContent.classList.remove("scale-95", "opacity-0");
    }, 10);
};

// Función para cerrar añadir Cassettes
const cerrarModal = () => {
    modalContent.classList.add("scale-95", "opacity-0");

    setTimeout(() => {
        modalOverlay.classList.add("hidden");
        modal.classList.add("hidden");
        errorMessage.textContent = "";
    }, 300);
};

// Función para marcar errores en los campos vacíos
const marcarError = (input) => {
    input.classList.add("border-red-500", "bg-red-100");
};

// Función para limpiar errores cuando el usuario escribe en un campo
const limpiarErrorCampo = (input) => {
    input.classList.remove("border-red-500", "bg-red-100");
};

// Función para limpiar errores en todos los campos
const limpiarErrores = () => {
    [descripcionInput, fechaInput, organoInput].forEach((input) => limpiarErrorCampo(input));
};

// Función para validar el formulario de añadir Cassette
const enviarFormulario = (event) => {
    event.preventDefault();

    const descripcion = document.getElementById("descripcionInput").value.trim();
    const fecha = document.getElementById("fechaInput").value.trim();
    const organo = document.getElementById("organoInput").value.trim();
    const caracteristicas = document.getElementById("caracteristicasInput").value.trim();
    const observaciones = document.getElementById("observacionesInput").value.trim();

    // Validación de campos obligatorios
    //! if (!descripcion || !fecha || !organo || !caracteristicas || !observaciones) {
    if (!descripcion || !fecha || !organo) {
        errorMessage.textContent = "Rellena los campos obligatorios";
        return; // No permite continuar si faltan datos
    }

    // Crear nueva fila en la tabla
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

    // Cerrar modal después de enviar
    cerrarModal();
    cassetteForm.reset();
};

// Event Listeners al final
document.addEventListener("DOMContentLoaded", () => {
    openModalBtn.addEventListener("click", abrirModal);
    closeModalBtn.addEventListener("click", cerrarModal);
    cassetteForm.addEventListener("submit", enviarFormulario);
});
