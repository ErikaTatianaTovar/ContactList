# ContactList
### README.md

# Agenda de Contactos

¡Bienvenido a la Agenda de Contactos! Esta aplicación web te permite gestionar tus contactos de manera sencilla. Puedes agregar, editar, eliminar y buscar contactos fácilmente. La aplicación está desplegada en el siguiente enlace: [Agenda de Contactos](https://contactlistjavascript.netlify.app)

## Funcionalidades

1. **Añadir Contacto**:
   - Abre el modal de agregar contacto.
   - Introduce el nombre y el número de teléfono.
   - Guarda el contacto.

2. **Editar Contacto**:
   - Abre el modal de edición al hacer clic en el botón de editar.
   - Modifica el nombre y/o el número de teléfono.
   - Guarda los cambios.

3. **Eliminar Contacto**:
   - Abre el modal de eliminación al hacer clic en el botón de eliminar.
   - Confirma la eliminación del contacto.

4. **Buscar Contacto**:
   - Introduce el nombre o el número de teléfono en el campo de búsqueda.
   - La lista se actualizará automáticamente con los contactos que coincidan con el criterio de búsqueda.

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6)
- Webpack

## Estructura del Proyecto

```plaintext
.
├── dist/
├── node_modules/
├── src/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── functions/
│   │   │   ├── addContact.js
│   │   │   ├── deleteContact.js
│   │   │   ├── editContact.js
│   │   │   └── searchContact.js
│   │   ├── app.js
│   │   ├── contactUtils.js
│   │   └── index.js
├── .gitignore
├── package.json
├── webpack.config.js
└── README.md
```

## Instalación y Ejecución Local

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tu_usuario/tu_repositorio.git
   ```

2. Navega al directorio del proyecto:
   ```sh
   cd tu_repositorio
   ```

3. Instala las dependencias:
   ```sh
   npm install
   ```

4. Construye el proyecto:
   ```sh
   npx webpack
   ```

5. Abre el proyecto en tu navegador:
   ```sh
   npx http-server dist
   ```

   Luego, abre `http://127.0.0.1:8080/` en tu navegador.

## Despliegue

El proyecto está desplegado en Netlify y se puede acceder a través del siguiente enlace:
[Agenda de Contactos](https://contactlistjavascript.netlify.app)

---

Gracias por usar la Agenda de Contactos. ¡Esperamos que te sea útil!