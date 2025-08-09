const express = require("express");
const router = express.Router();
const Mascota = require("../models/mascota");

const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validarCampos");

// POST /mascotas
router.post(
  "/",
  [
    check("cliente_id", "El id del cliente es obligatorio").not().isEmpty(),
    check("edad", "la edad de la mascota debe ser un numero").isNumeric(),
    validarCampos,
  ],
  async (req, res) => {
    try {
      const nuevaMascota = new Mascota(req.body);
      const guardada = await nuevaMascota.save();
      res.status(201).json(guardada);
    } catch (error) {
      res.status(400).json({ error: "Error al crear la mascota" });
    }
  }
);

// GET /mascotas?cliente_id=:id
router.get("/", async (req, res) => {
  const { cliente_id } = req.query;
  try {
    if (cliente_id) {
      const mascotas = await Mascota.find({ cliente_id });
      res.json(mascotas);
    } else {
      res.status(400).json({ error: "Falta el parametro cliente_id" });
    }
  } catch (error) {
    res.status(400).json({ error: "Error al obtener mascotas" });
  }
});

module.exports = router;
