document.addEventListener('DOMContentLoaded', () => {
  const registroForm = document.getElementById('registroForm');
  const btnAgregarDispositivo = document.getElementById('btnAgregarDispositivo');
  const contenedorDispositivos = document.getElementById('contenedorDispositivos');
  let contadorDispositivos = 0;


  btnAgregarDispositivo.addEventListener('click', () => {
    contadorDispositivos++;

    const dispositivoDiv = document.createElement('div');
    dispositivoDiv.classList.add('dispositivo-item');
    dispositivoDiv.id = `dispositivo-${contadorDispositivos}`;

    dispositivoDiv.innerHTML = `
            <div class="dispositivo-header">
                <span>Dispositivo #${contadorDispositivos}</span>
                <button type="button" class="btn-eliminar" onclick="eliminarDispositivo(${contadorDispositivos})">Eliminar</button>
            </div>
            <div class="form-group">
                <label>Tipo de Dispositivo *</label>
                <select name="tipoDispositivo" required>
                    <option value="">-- Seleccione Tipo --</option>
                    <option value="Smartwatch">Smartwatch</option>
                    <option value="Banda Deportiva">Banda Deportiva</option>
                    <option value="Ciclocomputador">Ciclocomputador</option>
                    <option value="Audífonos">Audífonos</option>
                </select>
                <small class="error-msg"></small>
            </div>
            <div class="form-group">
                <label>Número de Serie * (12 caracteres alfanuméricos)</label>
                <input type="text" name="numeroSerie" maxlength="12" placeholder="Ej. A1B2C3D4E5F6" required>
                <small class="error-msg"></small>
            </div>
        `;

    contenedorDispositivos.appendChild(dispositivoDiv);
    limpiarError('errorDispositivos');
  });


  window.eliminarDispositivo = function(id) {
    const elemento = document.getElementById(`dispositivo-${id}`);
    if (elemento) {
      elemento.remove();
    }
  };


  registroForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let esValido = true;


    document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');


    const nombre = document.getElementById('nombre').value.trim();
    const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,80}$/;
    if (!nombre || !regexNombre.test(nombre)) {
      mostrarError('errorNombre', 'Ingrese un nombre válido (solo letras y espacios, máx. 80 caracteres).');
      esValido = false;
    }


    const email = document.getElementById('email').value.trim();
    const regexEmail = /^[a-zA-Z0-9._%+-]+@(duoc\.cl|profesor\.duoc\.cl)$/i;
    if (!email || email.length > 60 || !regexEmail.test(email)) {
      mostrarError('errorEmail', 'Debe ser un correo institucional válido (@duoc.cl o @profesor.duoc.cl).');
      esValido = false;
    }


    const telefono = document.getElementById('telefono').value.trim();
    const regexTelefono = /^\d{9}$/;
    if (telefono !== "" && !regexTelefono.test(telefono)) {
      mostrarError('errorTelefono', 'El teléfono debe tener exactamente 9 dígitos numéricos.');
      esValido = false;
    }


    const password = document.getElementById('password').value;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$%&])[A-Za-z\d#$%&]{8,}$/;
    if (!password || !regexPassword.test(password)) {
      mostrarError('errorPassword', 'La contraseña debe incluir minúscula, mayúscula, número y un carácter (#, $, %, &).');
      esValido = false;
    }


    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
      mostrarError('errorConfirmPassword', 'Las contraseñas no coinciden.');
      esValido = false;
    }


    const bloquesDispositivos = contenedorDispositivos.querySelectorAll('.dispositivo-item');
    bloquesDispositivos.forEach(bloque => {
      const selectTipo = bloque.querySelector('select[name="tipoDispositivo"]');
      const inputSerie = bloque.querySelector('input[name="numeroSerie"]');
      const regexSerie = /^[a-zA-Z0-9]{12}$/;

      if (!selectTipo.value) {
        selectTipo.nextElementSibling.textContent = 'Seleccione un tipo de dispositivo.';
        esValido = false;
      }

      if (!inputSerie.value || !regexSerie.test(inputSerie.value)) {
        inputSerie.nextElementSibling.textContent = 'El número de serie debe tener exactamente 12 caracteres alfanuméricos.';
        esValido = false;
      }
    });

    // Exito
    if (esValido) {
      alert('¡Registro completado con éxito!');
      registroForm.reset();
      contenedorDispositivos.innerHTML = '';
    }
  });

  function mostrarError(idElemento, mensaje) {
    document.getElementById(idElemento).textContent = mensaje;
  }

  function limpiarError(idElemento) {
    document.getElementById(idElemento).textContent = '';
  }
});
