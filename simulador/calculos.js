function calculateLoan() {
    const personType = document.getElementById('personType').value;
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const loanTerm = parseInt(document.getElementById('loanTerm').value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || loanTerm <= 0) {
        const resultDiv = document.getElementById('result');
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = 'Por favor, ingresa valores válidos.';
        return;
    }

    // Ajustar tasa de interés según el tipo de persona
    let adjustedRate = interestRate;
    if (personType === 'corporate') {
        adjustedRate += 0.005; // Incremento del 0.5% para personas morales
    }

    // Fórmula para calcular el pago mensual
    const monthlyPayment = (loanAmount * adjustedRate) / (1 - Math.pow(1 + adjustedRate, -loanTerm));

    // Mostrar el resultado
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `Tipo de Persona: ${personType === 'individual' ? 'Persona Física' : 'Persona Moral'}<br>
                           Pago mensual estimado: $${isNaN(monthlyPayment) ? 'NaN' : monthlyPayment.toFixed(2)}<br>
                           <small>Nota: Este cálculo es una estimación y puede variar según condiciones reales.</small>`;
}

function updateTermDisplay(value) {
    const termDisplay = document.getElementById('termDisplay');
    termDisplay.textContent = `${value} meses`;
}


const productos = [
    {
        "id": "11",
        "nombre_producto": "Crédito a empresas del sector automotriz y de autopartes",
        "monto_max": "60000000",
        "monto_min": "1000000",
        "plazo_max": "60",
        "plazo_min": "12"
    },
    {
        "id": "10",
        "nombre_producto": "Crédito Construcción de inmuebles",
        "monto_max": "60000000",
        "monto_min": "1000000",
        "plazo_max": "120",
        "plazo_min": "12"
    },
    {
        "id": "9",
        "nombre_producto": "Crédito Sustentable",
        "monto_max": "60000000",
        "monto_min": "1000000",
        "plazo_max": "180",
        "plazo_min": "12"
    },
    {
        "id": "8",
        "nombre_producto": "Crédito para Adquisición de Maquinaria y Equipo",
        "monto_max": "60000000",
        "monto_min": "1000000",
        "plazo_max": "60",
        "plazo_min": "12"
    },
    {
        "id": "7",
        "nombre_producto": "Credito para Capital de trabajo",
        "monto_max": "60000000",
        "monto_min": "1000000",
        "plazo_max": "60",
        "plazo_min": "12"
    }
];

// Referencia al select
const selectElement = document.getElementById('productSelector');

// Iterar sobre el JSON y crear opciones
productos.forEach(producto => {
    const option = document.createElement('option');
    option.value = producto.id; // Usar el 'id' como valor de la opción
    option.textContent = producto.nombre_producto; // Mostrar el 'nombre_producto'
    selectElement.appendChild(option);
});