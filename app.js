const express = require('express');
const app = express();
const dbconect = require('./config/db')
const vetRoutes = require('./routes/veterinaria')

app.use(express.json());
app.use(vetRoutes);

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