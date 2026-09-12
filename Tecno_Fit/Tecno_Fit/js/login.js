document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const mensajeGlobal = document.getElementById('mensajeGlobalError');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();


    document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
    mensajeGlobal.style.display = 'none';

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    let esValido = true;

    if (!email) {
      document.getElementById('errorLoginEmail').textContent = 'Ingrese su correo electrónico.';
      esValido = false;
    }

    if (!password) {
      document.getElementById('errorLoginPassword').textContent = 'Ingrese su contraseña.';
      esValido = false;
    }

    if (esValido) {

      if (email.endsWith('@duoc.cl') || email.endsWith('@profesor.duoc.cl')) {
        alert('¡Inicio de sesión exitoso!');
      } else {
        mensajeGlobal.textContent = 'Credenciales inválidas o correo no registrado.';
        mensajeGlobal.style.display = 'block';
      }
    }
  });
});
