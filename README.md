SecurePass

Aplicación SPA en React para gestionar cuentas y contraseñas, verificar su fortaleza y consultar alertas simuladas de brechas de seguridad usando una API pública.

Problema
Muchas personas usan contraseñas débiles y las reutilizan, aumentando el riesgo de robo de datos. No existe un gestor educativo simple que muestre la importancia de la seguridad.

Solución
SecurePass permite:

Crear, leer y eliminar cuentas con contraseñas (CRUD en localStorage).

Evaluar la fortaleza de cada contraseña (Débil, Media, Alta).

Mostrar una lista de brechas recientes simuladas obtenidas desde una API pública.

Características

✔ SPA desarrollada con React + Vite

✔ Uso de componentes reutilizables

✔ Persistencia con localStorage

✔ Carga de datos desde JSONPlaceholder API

✔ Código limpio y comentado

Requisitos
Node.js v16 o superior
Navegador moderno

Instalación y ejecución
Clona el repositorio e instala dependencias:

```bash
git clone https://github.com/Empty6z/Securepass.git
cd securepass
npm install
npm run dev
Luego abre en tu navegador:
http://localhost:5173

