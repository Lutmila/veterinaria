const express = require("express");
const router = express.Router();
const {
  crearMascota,
  obtenerMascotasPorCliente,
  obtenerTodasLasMascotas,
  actualizarMascota,
  eliminarMascota
} = require("../controllers/mascota.controller");

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
  crearMascota
);

// GET /mascotas?cliente_id=:id
router.get("/", obtenerMascotasPorCliente);

// PUT /mascotas/:id
router.put("/:id", actualizarMascota);

// DELETE /mascotas/:id
router.delete("/:id", eliminarMascota);

// GET /mascotas/all
router.get("/all", obtenerTodasLasMascotas);

module.exports = router;
