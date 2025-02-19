function handleSelectionChange(selectElement) {
    const selectedValue = selectElement.value;

    if (selectedValue === 'fisica') {
        // Redirigir a la página para Persona Física con Actividad Empresarial
        window.location.href = 'index.html';
    } else if (selectedValue === 'moral') {
        // Redirigir a la página para Persona Moral
        window.location.href = 'PMoral.html';
    }
}

window.onload = function () {
    const currentPage = window.location.pathname.split('/').pop().toLowerCase(); 
    const selectElement = document.getElementById('personType');

    if (currentPage === 'pmoral.html') {
        selectElement.value = 'moral'; 
    } else if (currentPage === 'index.html') {
        selectElement.value = 'fisica'; 
    } 
};

document.addEventListener("DOMContentLoaded", async function () {
    const apiURL = "https://gestion-ucg.lerco.agency/web/v1/catalogos/get-producto";
    const productSelector = document.getElementById('productSelector');
    const loanAmountRange = document.getElementById('loanRange');
    const loanTermRange = document.getElementById('loanTerm');


    try {
        const response = await fetch(apiURL);
        
        const products = await response.json();

        // Llenar el selector con productos obtenidos
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.nombre_producto;
            productSelector.appendChild(option);
        });

        productSelector.addEventListener('change', event => {
            const selectedProduct = products.find(product => product.id === event.target.value);
            if (selectedProduct) {
                updateProductDetails(selectedProduct);
            }
        });

        loanAmountRange.addEventListener('input', event => {
            updateAmountDisplay(event.target.value);
        });

        loanTermRange.addEventListener('input', event => {
            updateTermDisplay(event.target.value);
        });

    } catch (error) {
        console.error("Error al cargar los productos:", error);
    }

    

    function updateProductDetails(product) {
        loanAmountRange.min = product.monto_min;
        loanAmountRange.max = product.monto_max;
        loanAmountRange.value = product.monto_min;

        loanTermRange.min = product.plazo_min;
        loanTermRange.max = product.plazo_max;
        loanTermRange.value = product.plazo_min;

        const formatter = new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN',
        });

        document.getElementById('minAmountLabel').textContent = `Monto mínimo: ${formatter.format(product.monto_min)}`;
        document.getElementById('maxAmountLabel').textContent = `Monto máximo: ${formatter.format(product.monto_max)}`;

        document.getElementById('minTermLabel').textContent = `Plazo mínimo: ${product.plazo_min} meses`;
        document.getElementById('maxTermLabel').textContent = `Plazo máximo: ${product.plazo_max} meses`;

        updateAmountDisplay(product.monto_min);
        updateTermDisplay(product.plazo_min);
    }

    function updateAmountDisplay(value) {
        const formatter = new Intl.NumberFormat('es-MX', {
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
    });

    
});
