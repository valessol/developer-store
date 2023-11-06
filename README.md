<div align="center">

# DeveloperStore

Tienda online realizada con React Js, como parte del proyecto final del curso "React JS" de Coderhouse.

</div>

**Tabla de contenidos**

- [Funcionalidades](#funcionalidades)
- [Dependencias utilizadas](#dependencias-utilizadas)
- [Refactor](#refactor)
- [Instalación](#instalación)

## Funcionalidades

- Navegación entre diferentes categorías, tanto desde el menú como desde las subcategorías disponibles en la vista de cada card.
- Vista de Catálogo de todos los productos o por categorías
- Vista de detalle de producto
- Vista de Carrito con detalle de items añadidos
- Cart Widget con indicador de cantidad
- Registro de usuarios y login con email y contraseña o con Google
- Vista Checkout con datos del cliente y del pedido: si el usuario se logueó con Google y no proporcionó todos los datos, éstos le son solicitados para poder generar la orden de compra.
- Uso de Firebase para autenticación de usuarios y guardado de productos, ordenes de compra y registro de clientes en la base de datos de Firestore.
- Uso de Context para manejar los estados de autenticación de usuarios, user interface, items del carrito y favoritos
- Widget de favoritos, con indicador de cantidad de items añadidos
- Dark Mode
- Sitio responsive

Usuario registado:

- Email: test@test.com
- Password: 123456

### Dependencias utilizadas

- "antd": Ant Design (framework para react),
- "react",
- "react-dom",
- "react-icons",
- "react-router-dom": manejo de rutas,
- "firebase": uso de los módulos de Firestore Database y Authentication,
- "sweetalert2": comunicación de errores o estados de éxito al usuario,
- "sass"

## Refactor

El refactor del proyecto se realizó en base a la actualización de la librería Firebase a su última versión (10.5.2 actualmente), así como de componentes, utilizando funciones helpers y archivos de configuración.

## Instalación

```
git clone https://github.com/valessol/developer-store.git
cd developer-store
npm install
npm run start
```

Node version: 16.17.0

#### Autor: Valeria Silveira
