const Mascota = require("../models/mascota");

const crearMascota = async (req, res) => {
  try {
    const nuevaMascota = new Mascota(req.body);
    const guardada = await nuevaMascota.save();
    res.status(201).json(guardada);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la mascota" });
  }
};

const obtenerMascotasPorCliente = async (req, res) => {
  const { cliente_id } = req.query;
  try {
    if (cliente_id) {
      const mascotas = await Mascota.find({ cliente_id });
      res.json(mascotas);
    } else {
      res.status(400).json({ error: "Falta el parametro cliente_id" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener mascotas" });
  }
};

const obtenerTodasLasMascotas = async (req, res) => {
  try {
    const mascotas = await Mascota.find()
      .populate('cliente_id', 'nombre')
      .lean();
        
    res.json(mascotas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener todas las mascotas" });
  }
};

const actualizarMascota = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, edad, cliente_id } = req.body;

    const mascotaActualizada = await Mascota.findByIdAndUpdate(
      id,
      { nombre, edad, cliente_id },
      { new: true }
    );

    if (!mascotaActualizada) {
      return res.status(404).json({ error: "Mascota no encontrada" });
    }

    res.json(mascotaActualizada);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la mascota" });
  }
};

const eliminarMascota = async (req, res) => {
  try {
    const { id } = req.params;

    const mascotaEliminada = await Mascota.findByIdAndDelete(id);

    if (!mascotaEliminada) {
      return res.status(404).json({ error: "Mascota no encontrada" });
    }

    res.json({ mensaje: "Mascota eliminada" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la mascota" });
  }
};

module.exports = {
  crearMascota,
  obtenerMascotasPorCliente,
  obtenerTodasLasMascotas,
  actualizarMascota,
  eliminarMascota
};
