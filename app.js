const express = require('express');
const cors = require('cors');
const dbconect = require('./config/db');

const clienteRoutes = require('./routes/cliente');
const mascotaRoutes = require('./routes/mascota');

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use('/clientes', clienteRoutes);
app.use('/mascotas', mascotaRoutes);

app.get('/', (req, res) => {
  res.send("Servidor funcionando correctamente");
});

dbconect().catch(err => {
  console.error('No se pudo conectar a la base de datos:', err);
});

module.exports = app;
