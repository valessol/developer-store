# DeveloperStore

Tienda online realizada con React Js, como parte del proyecto final del curso "React JS" de Coderhouse.

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
- Renderizado condicional

### Dependencias utilizadas

- "antd": Ant Design (framework para react),
- "react",
- "react-dom",
- "react-icons",
- "react-router-dom": manejo de rutas,
- "firebase": uso de los módulos de Firestore Database y Authentication,
- "react-lottie": animación de la página 404,
- "sweetalert2": comunicación de errores o estados de éxito al usuario,
- "sass"

#### Autor: Valeria Silveira