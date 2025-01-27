
// Datos del formulario que el Usuario llena
function guardarDatos(event) {
    // Prevenir la acción predeterminada del enlace (evitar la redirección antes de guardar los datos)
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const representativeName = document.getElementById('representativeName').value;
    const representativeLastName = document.getElementById('representativeLastName').value;
    const representativeMotherName = document.getElementById('representativeMotherName').value;
    const representativeEmail = document.getElementById('representativeEmail').value;
    const representativePhone = document.getElementById('representativePhone').value;
    const representativeMonto = document.getElementById ('representativeMonto').value;

    // Guardar los datos en localStorage
    localStorage.setItem('representativeName', representativeName);
    localStorage.setItem('representativeLastName', representativeLastName);
    localStorage.setItem('representativeMotherName', representativeMotherName);
    localStorage.setItem('representativeEmail', representativeEmail);
    localStorage.setItem('representativePhone', representativePhone);
    localStorage.setItem('representativeMonto', representativeMonto);

    // Ahora redirigir a la siguiente página (RFisica.html)
    window.location.href = "RFisica.html";
}

// resultados de los Datos del Usuario
document.addEventListener('DOMContentLoaded', function () {
    // Recuperar los datos desde localStorage
    const representativeName = localStorage.getItem('representativeName');
    const representativeLastName = localStorage.getItem('representativeLastName');
    const representativeMotherName = localStorage.getItem('representativeMotherName');
    const representativeEmail = localStorage.getItem('representativeEmail');
    const representativePhone = localStorage.getItem('representativePhone');
    const representativeMonto = localStorage.getItem('representativeMonto');

    // Asignar los valores a los elementos span correspondientes
    document.getElementById('Name').textContent = representativeName || "No disponible";
    document.getElementById('NamePaterno').textContent = representativeLastName || "No disponible";
    document.getElementById('NameMaterno').textContent = representativeMotherName || "No disponible";
    document.getElementById('Correo').textContent = representativeEmail || "No disponible";
    document.getElementById('Phone').textContent = representativePhone || "No disponible";
    document.getElementById('Monto').textContent = representativeMonto || "No disponible";
});
