/*
    JavaScript de gestion.html

*/

/* 


*/


// Añadir Cassettes

document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const modal = document.getElementById("modal");
    const cassetteForm = document.getElementById("cassetteForm");
    const cassetteTableBody = document.getElementById("cassetteTableBody");

    openModalBtn.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });

    closeModalBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    cassetteForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const descripcion = document.getElementById("descripcionInput").value;
        const fecha = document.getElementById("fechaInput").value;
        const organo = document.getElementById("organoInput").value;

        if (!descripcion || !fecha || !organo) {
            alert("Todos los campos son obligatorios.");
            return;
        }

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
        modal.classList.add("hidden");
        cassetteForm.reset();
    });
});
