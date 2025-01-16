const producto = [
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
        "nombre_producto": "Crédito para Capital de trabajo",
        "monto_max": "60000000",
        "monto_min": "1000000",
        "plazo_max": "60",
        "plazo_min": "12"
    }
];

const selectElement = document.getElementById('productSelector');
const loanAmountInput = document.getElementById('loanAmount');
const loanTermInput = document.getElementById('loanTerm');
const minAmountLabel = document.getElementById('minAmountLabel');
const maxAmountLabel = document.getElementById('maxAmountLabel');
const minTermLabel = document.getElementById('minTermLabel');
const maxTermLabel = document.getElementById('maxTermLabel');
const selectedAmount = document.getElementById('selectedAmount');
const selectedTerm = document.getElementById('selectedTerm');

// Llenar el selector con los productos financieros
productos.forEach(producto => {
    const option = document.createElement('option');
    option.value = producto.id;
    option.textContent = producto.nombre_producto;
    selectElement.appendChild(option);
});

selectElement.addEventListener('change', () => {
    const selectedProduct = productos.find(producto => producto.id === selectElement.value);
    if (selectedProduct) {

        loanAmountInput.min = selectedProduct.monto_min;
        loanAmountInput.max = selectedProduct.monto_max;
        loanAmountInput.value = selectedProduct.monto_min;

        loanTermInput.min = selectedProduct.plazo_min;
        loanTermInput.max = selectedProduct.plazo_max;
        loanTermInput.value = selectedProduct.plazo_min;

        minAmountLabel.textContent = `Monto mínimo: $${selectedProduct.monto_min}`;
        maxAmountLabel.textContent = `Monto máximo: $${selectedProduct.monto_max}`;
        minTermLabel.textContent = `Plazo mínimo: ${selectedProduct.plazo_min} meses`;
        maxTermLabel.textContent = `Plazo máximo: ${selectedProduct.plazo_max} meses`;

        updateAmountDisplay(selectedProduct.monto_min);
        updateTermDisplay(selectedProduct.plazo_min);
    } else {
        resetInputs();
    }
});

function updateAmountDisplay(value) {
    selectedAmount.textContent = value;
}

function updateTermDisplay(value) {
    selectedTerm.textContent = value;
}

function resetInputs() {
    loanAmountInput.value = 0;
    loanAmountInput.min = 0;
    loanAmountInput.max = 0;

    loanTermInput.value = 0;
    loanTermInput.min = 0;
    loanTermInput.max = 0;

    minAmountLabel.textContent = "Monto mínimo:";
    maxAmountLabel.textContent = "Monto máximo:";
    minTermLabel.textContent = "Plazo mínimo:";
    maxTermLabel.textContent = "Plazo máximo:";
    selectedAmount.textContent = 0;
    selectedTerm.textContent = 0;
}
