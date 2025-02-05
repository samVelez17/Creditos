
function handleSelectionChange(selectElement) {
    const selectedValue = selectElement.value;
    if (selectedValue === 'pmoral') {
        window.location.href = 'PMoral.html'; // Redirige a Persona Moral
    } else if (selectedValue === 'pfisica') {
        window.location.href = 'index.html'; // Redirige a Persona Física
    }
}

// Establecer el valor actual del selector según la página activa
window.onload = function () {
    const currentPage = window.location.pathname.split('/').pop(); // Obtiene el nombre del archivo actual
    const selectElement = document.getElementById('personType');

    if (currentPage === 'PMoral.html') {
        selectElement.value = 'moral'; // Marca "Persona Moral"
    } else if (currentPage === 'index.html') {
        selectElement.value = 'fisica'; // Marca "Persona Física"
    }
};

const products = [
    {
        id: "11",
        nombre_producto: "Crédito a empresas del sector automotriz y de autopartes",
        monto_max: 60000000,
        monto_min: 1000000,
        plazo_max: 60,
        plazo_min: 12
    },
    {
        id: "10",
        nombre_producto: "Crédito Construcción de inmuebles",
        monto_max: 60000000,
        monto_min: 1000000,
        plazo_max: 120,
        plazo_min: 12
    },
    {
        id: "9",
        nombre_producto: "Crédito Sustentable",
        monto_max: 60000000,
        monto_min: 1000000,
        plazo_max: 180,
        plazo_min: 12
    },
    {
        id: "8",
        nombre_producto: "Crédito para Adquisición de Maquinaria y Equipo",
        monto_max: 60000000,
        monto_min: 1000000,
        plazo_max: 60,
        plazo_min: 12
    },
    {
        id: "7",
        nombre_producto: "Crédito para Capital de trabajo",
        monto_max: 60000000,
        monto_min: 1000000,
        plazo_max: 60,
        plazo_min: 12
    }
];

const productSelector = document.getElementById('productSelector');
const loanAmountRange = document.getElementById('loanRange');
const loanTermRange = document.getElementById('loanTerm');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.nombre_producto;
    productSelector.appendChild(option);
});

productSelector.addEventListener('change', event => {
    const selectedProduct = products.find(product => product.id === event.target.value);
    if (selectedProduct) {
        loanAmountRange.min = selectedProduct.monto_min;
        loanAmountRange.max = selectedProduct.monto_max;
        loanAmountRange.value = selectedProduct.monto_min;

        loanTermRange.min = selectedProduct.plazo_min;
        loanTermRange.max = selectedProduct.plazo_max;
        loanTermRange.value = selectedProduct.plazo_min;

        const formatter = new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN',
        });

        document.getElementById('minAmountLabel').textContent = `Monto mínimo: ${formatter.format(selectedProduct.monto_min)}`;
        document.getElementById('maxAmountLabel').textContent = `Monto máximo: ${formatter.format(selectedProduct.monto_max)}`;

        document.getElementById('minTermLabel').textContent = `Plazo mínimo: ${selectedProduct.plazo_min} meses`;
        document.getElementById('maxTermLabel').textContent = `Plazo máximo: ${selectedProduct.plazo_max} meses`;

        updateAmountDisplay(selectedProduct.monto_min);
        updateTermDisplay(selectedProduct.plazo_min);
    }
});

loanAmountRange.addEventListener('input', event => {
    updateAmountDisplay(event.target.value);
});

loanTermRange.addEventListener('input', event => {
    updateTermDisplay(event.target.value);
});

function updateAmountDisplay(value) {
    const formatter = new Intl.NumberFormat
        ('es-MX',
            {
                style: 'currency',
                currency: 'MXN',
            });

    document.getElementById('selectedAmount').textContent = formatter.format(value);
}


function updateTermDisplay(value) {
    document.getElementById('selectedTerm').textContent = `${value} meses`;
}

let currencyFormat = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0
})

const inputMonto = document.getElementById('representativeMonto');
inputMonto.addEventListener('input', function () {
    inputMonto.value = inputMonto.value.replace(/[^0-9]/g, '');
});
function updateMonto(monto) {
    monto = document.getElementById('representativeMonto').value;
    document.getElementById('monto').textContent = currencyFormat.format(monto);
}