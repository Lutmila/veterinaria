const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente');

// GET /clientes
router.get('/', async (req, res) => {
  const clientes = await Cliente.find();
  res.json(clientes);
});

// GET /clientes/:id
router.get('/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json(cliente);
  } catch (error) {
    res.status(400).json({ error: 'ID invalido' });
  }
});

// POST /clientes
router.post('/', async (req, res) => {
  const nuevoCliente = new Cliente(req.body);
  const guardado = await nuevoCliente.save();
  res.status(201).json(guardado);
});

// PUT /clientes/:id
router.put('/:id', async (req, res) => {
  try {
    const actualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ error: 'ID invalido' });
  }
});

// DELETE /clientes/:id
router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await Cliente.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json({ mensaje: 'Cliente eliminado' });
  } catch (error) {
    res.status(400).json({ error: 'ID invalido' });
  }
});

module.exports = router;
