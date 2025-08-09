const mongoose = require('mongoose');

const mascotaSchema = new mongoose.Schema({
nombre: {
      type: String,
      required: true,
    },
especie: {
      type: String,
      required: true,
    },
raza: {
      type: String,
      required: true,
    },
edad: {
      type: Number
    },
cliente_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', 
    required: true
}
});

module.exports = mongoose.model('Mascota', mascotaSchema);
