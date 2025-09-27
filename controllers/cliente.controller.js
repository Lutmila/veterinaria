const Cliente = require('../models/cliente');
const Mascota = require('../models/mascota');

const obtenerTodosLosClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find().lean();
        
        const clientesConMascotas = await Promise.all(
            clientes.map(async (cliente) => {
                const mascotas = await Mascota.find({ cliente_id: cliente._id }).lean();
                return {
                    ...cliente,
                    mascotas
                };
            })
        );
        
        res.json(clientesConMascotas);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los clientes" });
    }
};

const obtenerClientePorId = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ error: 'ID invalido' });
    }
};

const crearCliente = async (req, res) => {
    try {
        const nuevoCliente = new Cliente(req.body);
        const guardado = await nuevoCliente.save();
        res.status(201).json(guardado);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el cliente' });
    }
};

const actualizarCliente = async (req, res) => {
    try {
        const actualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!actualizado) return res.status(404).json({ error: 'Cliente no encontrado' });
        res.json(actualizado);
    } catch (error) {
        res.status(500).json({ error: 'ID invalido' });
    }
};

const eliminarCliente = async (req, res) => {
    try {
        const eliminado = await Cliente.findByIdAndDelete(req.params.id);
        if (!eliminado) return res.status(404).json({ error: 'Cliente no encontrado' });
        res.json({ mensaje: 'Cliente eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'ID invalido' });
    }
};

module.exports = {
    obtenerTodosLosClientes,
    obtenerClientePorId,
    crearCliente,
    actualizarCliente,
    eliminarCliente
};