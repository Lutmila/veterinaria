const express = require('express');
const cors = require('cors');
const app = express();
const dbconect = require('./config/db');

const clienteRoutes = require('./routes/cliente');
const mascotaRoutes = require('./routes/mascota');

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.options('*', cors());

app.use(express.json());

app.use('/clientes',clienteRoutes);
app.use('/mascotas',mascotaRoutes);

app.get('/',(req,res)=>{
    res.send("Servidor funcionando correctamente");
});

dbconect().then(()=>{
    app.listen(3000,()=>{
        console.log('servidor corriendo en el puerto 3000')
    })

}).catch(err=>{
    console.log('no se pudo conectar debido a un error en la base');
    process.exit(1);

});

module.exports = app;