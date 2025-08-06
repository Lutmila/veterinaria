const mongoose = require("mongoose");

const vetSchema = new mongoose.Schema(
    {

    }
);

const ModelVet = mongoose.model("veterinaria",libroSchema);
module.exports = ModelVet;