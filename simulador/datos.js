function guardarDatos() {
    // Obtener valores desde los inputs
    const product = document.getElementById("productSelector")?.value || "Producto no seleccionado";
    const loanTerm = parseInt(document.getElementById("loanTerm")?.value) || 10;
    const loanRange = parseFloat(document.getElementById("loanRange")?.value) || 10;

    // Validar si los elementos existen en el DOM
    if (!document.getElementById("productSelector") || 
        !document.getElementById("loanTerm") || 
        !document.getElementById("loanRange")) {
        console.error("Error: Algunos elementos no se encontraron en el DOM.");
        return;
    }

    // Guardar los valores en localStorage
    localStorage.setItem("product", product);
    localStorage.setItem("loanTerm", Math.round(loanTerm)); 
    localStorage.setItem("loanRange", Math.round(loanRange)); 
    
    actualizarCard();
}

//nueva funcion 
function actualizarMonto() {
    const loanRange = parseFloat(document.getElementById("loanRange")?.value) || 0;
    
    const amountElement = document.getElementById("selectedAmount");
    const amountLabelElement = document.getElementById("selectedAmountLabel"); // Nuevo span dentro del label

    const formatearMoneda = (monto) => monto.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });

    amountElement.textContent = formatearMoneda(loanRange);
    amountLabelElement.textContent = formatearMoneda(loanRange);
}

// Agregar evento para que el valor se actualice en tiempo real
document.getElementById("loanRange")?.addEventListener("input", actualizarMonto);


window.onload = () => {
    // Configurar valores predeterminados si no existen en localStorage
    if (!localStorage.getItem("loanTerm")) localStorage.setItem("loanTerm", "0");
    if (!localStorage.getItem("loanRange")) localStorage.setItem("loanRange", "0");
    localStorage.setItem("product", "Producto no seleccionado");

    actualizarCard();
};

// Actualizar los valores de la tarjeta dinámica
function actualizarCard() {
    const loanTerm = parseInt(localStorage.getItem("loanTerm")) || 0;
    const loanRange = parseFloat(localStorage.getItem("loanRange")) || 0;

    const termElement = document.getElementById("selectedTerm");
    const amountElement = document.getElementById("selectedAmount");
    const pagoMensualElement = document.querySelector(".resultado-card");

    const formatearMoneda = (monto) => monto.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });

    amountElement.textContent = formatearMoneda(loanRange);

    const pagoMensual = loanRange > 0 && loanTerm > 0 ? loanRange / loanTerm : 0;
    pagoMensualElement.textContent = formatearMoneda(pagoMensual);

    termElement.textContent = loanTerm > 0 ? `${loanTerm} meses` : "0 meses";
}

// Validar si todos los campos están llenos
function validarFormulario() {
    const product = document.getElementById("productSelector")?.value;
    const loanTerm = document.getElementById("loanTerm")?.value;
    const loanRange = document.getElementById("loanRange")?.value;

    // Verificar que todos los campos estén llenos
    return product && loanTerm && loanRange;
}


function actualizarEstadoBoton() {
    const botonContinuar = document.getElementById("botonContinuar");
    if (validarFormulario()) {
        botonContinuar.disabled = false;
    } else {
        botonContinuar.disabled = true;
    }
}

// Agregar eventos de validación a los campos del formulario
function agregarEventosDeValidacion() {
    const campos = document.querySelectorAll("#productSelector, #loanTerm, #loanRange");
    campos.forEach((campo) => {
        campo.addEventListener("input", actualizarEstadoBoton);
    });

    actualizarEstadoBoton();
}


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