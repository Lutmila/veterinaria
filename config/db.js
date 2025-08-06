const mongoose = require("mongoose");

const dbconect = async()=>{
    try{
            await mongoose.connect("mongodb://localhost:27017/veterinaria");
            console.log("conexion exitosa");
    }catch(error){
        console.log('error en la conexion de la base de datos',error)
        process.exit(1);
    }
};

module.exports = dbconect;