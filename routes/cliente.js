const express = require('express');
const { validarCampos } = require("../middlewares/validarCampos");
const { check } = require("express-validator");

const router = express.Router();
const {
  obtenerTodosLosClientes,
  obtenerClientePorId,
  crearCliente,
  actualizarCliente,
  eliminarCliente
} = require('../controllers/cliente.controller');

// GET /clientes
router.get('/', obtenerTodosLosClientes);

// GET /clientes/:id
router.get('/:id', obtenerClientePorId);

// POST /clientes
router.post('/', [
  check("nombre", "El nombre del cliente es obligatorio").not().isEmpty(),
  check("email", "El email del cliente es obligatorio").not().isEmpty(),
  check("email", "El email del cliente debe ser un email valido").isEmail(),
  validarCampos,
], crearCliente);

// PUT /clientes/:id
router.put('/:id', actualizarCliente);

// DELETE /clientes/:id
router.delete('/:id', eliminarCliente);

module.exports = router;
