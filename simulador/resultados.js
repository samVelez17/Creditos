// Recupera los datos del localStorage
const name = localStorage.getItem('name');
const email = localStorage.getItem('email');
const age = localStorage.getItem('age');

// Comprueba si existen los datos y los muestra
if (name && email && age) {
  document.getElementById('resultName').textContent = name;
  document.getElementById('resultEmail').textContent = email;
  document.getElementById('resultAge').textContent = age;
} else {
  // Si no hay datos, muestra un mensaje o redirige
  document.getElementById('resultSection').innerHTML = '<p>No se ingresaron datos.</p>';
}
