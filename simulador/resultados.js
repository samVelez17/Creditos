function goToRMoral() {
    window.location.href = 'RMoral.html'; // Cambia a la ruta correcta si está en una carpeta específica
}

function saveFormData() {
    // Obtener los valores del formulario
    const representativeName = document.getElementById('representativeName').value;
    const representativeEmail = document.getElementById('representativeEmail').value;
    const representativePhone = document.getElementById('representativePhone').value;
    const representativeCompany = document.getElementById('representativeCompany').value;
    const representativeRfc = document.getElementById('representativeRfc').value;

    // Guardar los datos en localStorage
    localStorage.setItem('representativeName', representativeName);
    localStorage.setItem('representativeEmail', representativeEmail);
    localStorage.setItem('representativePhone', representativePhone);
    localStorage.setItem('representativeCompany', representativeCompany);
    localStorage.setItem('representativeRfc', representativeRfc);

    // Redirigir a la página de resultados
    window.location.href = 'result.html';
  }
  