# Veterinaria API

## Descripción
API REST para la gestión de clientes y mascotas en una veterinaria. Permite registrar, consultar, actualizar y eliminar información de clientes y sus mascotas. Ideal para digitalizar la administración de una veterinaria y facilitar el acceso a los datos desde cualquier lugar.

## Características
- Gestión de clientes: alta, consulta, edición y eliminación.
- Gestión de mascotas asociadas a clientes.
- Validación de datos en los endpoints.
- Conexión a base de datos MongoDB Atlas.
- API RESTful lista para despliegue en Vercel.

## Tecnologías Utilizadas
- Node.js
- Express.js
- MongoDB Atlas (Mongoose)
- Express Validator
- Dotenv
- Nodemon (desarrollo)

## Cómo Instalar y Usar
1. Clona el repositorio:
   ```sh
   git clone <git@github.com:Lutmila/veterinaria.git>
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Crea un archivo `.env` con la variable `MONGO_URI` de tu base de datos MongoDB Atlas.
4. Inicia el servidor en desarrollo:
   ```sh
   npm run dev
   ```
5. El servidor estará disponible en `http://localhost:3000`.

## Estructura del Proyecto
```
├── app.js
├── package.json
├── vercel.json
├── config/
│   └── db.js
├── middlewares/
│   └── validarCampos.js
├── models/
│   ├── cliente.js
│   └── mascota.js
├── routes/
│   ├── cliente.js
│   └── mascota.js
```

## API Endpoints
### Clientes
- `GET /clientes` — Lista todos los clientes
- `GET /clientes/:id` — Obtiene un cliente por ID
- `POST /clientes` — Crea un nuevo cliente
- `PUT /clientes/:id` — Actualiza un cliente existente
- `DELETE /clientes/:id` — Elimina un cliente

### Mascotas
- `POST /mascotas` — Crea una nueva mascota (requiere `cliente_id` y datos de la mascota)
- `GET /mascotas?cliente_id=:id` — Lista mascotas de un cliente

## Créditos y Despliegue
- Desarrollado por Lutmila
- Desplegado en Vercel (vercel.json incluido para configuración)
