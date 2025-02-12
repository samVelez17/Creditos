// Nueva función para actualizar el monto en tiempo real
function actualizarMonto() {
    const loanRange = parseFloat(document.getElementById("loanRange")?.value) || 0;
    const amountElement = document.getElementById("selectedAmount");
    const amountLabelElement = document.getElementById("selectedAmountLabel");
    const termElement = document.getElementById("selectedTerm");
    
    const formatearMoneda = (monto) => monto.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
    
    if (amountElement) amountElement.textContent = formatearMoneda(loanRange);
    if (amountLabelElement) amountLabelElement.textContent = formatearMoneda(loanRange);
    if (termElement) termElement.textContent = `${document.getElementById("loanTerm")?.value || 0} meses`;
}

// Nueva función para actualizar el plazo en tiempo real
function actualizarPlazo() {
    const loanTerm = parseInt(document.getElementById("loanTerm")?.value) || 0;
    const termLabelElement = document.getElementById("selectedTermLabel2");
    
    if (termLabelElement) termLabelElement.textContent = `${loanTerm} meses`;
}

// Función para guardar datos en localStorage
function guardarDatos() {
    const product = document.getElementById("productSelector")?.value || "Producto no seleccionado";
    const loanTerm = parseInt(document.getElementById("loanTerm")?.value) || 10;
    const loanRange = parseFloat(document.getElementById("loanRange")?.value) || 10;

    if (!document.getElementById("productSelector") || 
        !document.getElementById("loanTerm") || 
        !document.getElementById("loanRange")) {
        console.error("Error: Algunos elementos no se encontraron en el DOM.");
        return;
    }

    localStorage.setItem("product", product);
    localStorage.setItem("loanTerm", Math.round(loanTerm)); 
    localStorage.setItem("loanRange", Math.round(loanRange)); 
    
    actualizarCard();
}

// Función para actualizar la tarjeta dinámica
function actualizarCard() {
    const loanTerm = parseInt(localStorage.getItem("loanTerm")) || 0;
    const loanRange = parseFloat(localStorage.getItem("loanRange")) || 0;

    const termElement = document.getElementById("selectedTerm");
    const amountElement = document.getElementById("selectedAmount");
    const amountLabelElement = document.getElementById("selectedAmountLabel");
    const pagoMensualElement = document.querySelector(".resultado-card");
    const termLabelElement = document.getElementById("selectedTermLabel2");

    const formatearMoneda = (monto) => monto.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });

    if (amountElement) amountElement.textContent = formatearMoneda(loanRange);
    if (amountLabelElement) amountLabelElement.textContent = formatearMoneda(loanRange);

    const pagoMensual = loanRange > 0 && loanTerm > 0 ? loanRange / loanTerm : 0;
    if (pagoMensualElement) pagoMensualElement.textContent = formatearMoneda(pagoMensual);

    if (termElement) termElement.textContent = loanTerm > 0 ? `${loanTerm} meses` : "0 meses";
    if (termLabelElement) termLabelElement.textContent = `${loanTerm} meses`;
}

// Función para validar si el formulario está completo
function validarFormulario() {
    const product = document.getElementById("productSelector")?.value;
    const loanTerm = document.getElementById("loanTerm")?.value;
    const loanRange = document.getElementById("loanRange")?.value;
    return product && loanTerm && loanRange;
}

// Función para actualizar el estado del botón "Continuar"
function actualizarEstadoBoton() {
    const botonContinuar = document.getElementById("botonContinuar");
    if (botonContinuar) {
        botonContinuar.disabled = !validarFormulario();
    }
}

// Agregar eventos de validación a los campos del formulario
function agregarEventosDeValidacion() {
    document.querySelectorAll("#productSelector, #loanTerm, #loanRange").forEach((campo) => {
        campo.addEventListener("input", actualizarEstadoBoton);
    });
    actualizarEstadoBoton();
}

// Agregar eventos para actualizar monto y plazo en tiempo real
document.getElementById("loanRange")?.addEventListener("input", actualizarMonto);
document.getElementById("loanTerm")?.addEventListener("input", () => {
    actualizarMonto();
    actualizarPlazo();
});

// Configuración inicial al cargar la página
window.onload = () => {
    if (!localStorage.getItem("loanTerm")) {
        localStorage.setItem("loanTerm", "0");
    }
    if (!localStorage.getItem("loanRange")) {
        localStorage.setItem("loanRange", "0");
    }
    localStorage.setItem("product", "Producto no seleccionado");

    actualizarCard();
    agregarEventosDeValidacion();
};


function handleContinue() {
    if (validarFormulario()) {
        guardarDatos();
        window.location.href = 'RFisica.html';
    } else {
        alert("Por favor, completa todos los campos antes de continuar.");
    }
}
function handContinue() {
    if (validarFormulario()) {
        guardarDatos();
        window.location.href = 'RMoral.html';
    } else {
        alert("Por favor, completa todos los campos antes de continuar.");
    }
}
function handleRegresar() {
    
    localStorage.setItem("loanTerm", "0");
    localStorage.setItem("loanRange", "0");
    localStorage.setItem("product", "Producto no seleccionado");
    window.location.href = 'index.html'; 
}