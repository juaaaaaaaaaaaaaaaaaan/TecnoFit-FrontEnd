# TecnoFit - Sistema de Registro e Inicio de Sesión

Este repositorio contiene la entrega de la Evaluación Parcial 1

## 📌 Descripción del Proyecto
El proyecto consiste en el desarrollo del módulo Front-End para la tienda en línea **TecnoFit**, enfocada en la comercialización de dispositivos de monitoreo deportivo y wearables. La solución incluye una pantalla de bienvenida, un sistema de autenticación de usuarios (login) y un formulario de registro interactivo que permite la vinculación dinámica de dispositivos inteligentes.

## 🛠️ Tecnologías Utilizadas
* **HTML5:** Estructuración semántica de páginas y formularios.
* **CSS3:** Estilos adaptativos y diseño moderno con variables CSS.
* **JavaScript (Vanilla / ES6):** Validaciones de formularios en tiempo real y manipulación dinámica del DOM.
* 
## 🚀 Funcionalidades Principales

### 1. Formulario de Registro Dinámico 

  **Nombre Completo:** Validación de caracteres alfabéticos y espacios.
  **Correo Institucional:** Restricción estricta a dominios `@duoc.cl` o `@profesor.duoc.cl`.
  **Teléfono:** Campo opcional con validación de exactamente 9 dígitos numéricos.
  **Contraseña:** Validación de mínimo 8 caracteres, incluyendo al menos una mayúscula, una minúscula, un número y un carácter especial.
  **Sección Dinámica de Dispositivos:** Botón interactivo para añadir/eliminar múltiples dispositivos inteligentes. Cada dispositivo valida:
  * Tipo de dispositivo (Smartwatch, Banda Deportiva, Ciclocomputador, Audífonos).
  * Número de serie obligatorio de 12 caracteres alfanuméricos.

### 2. Módulo de Inicio de Sesión (`login.html`)
* Formulario de ingreso con validaciones en tiempo real y mensajes de error visuales ante credenciales inválidas.

## Nombre del los Integrsntes

-Juan Carlos Jara

## 📂 Estructura del Proyecto
```text
Tecno_Fit/
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── login.js
│   └── registro.js
├── index.html
├── login.html
├── registro.html
└── README.md


