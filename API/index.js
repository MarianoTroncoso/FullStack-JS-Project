// archivo principal de configuracion del servidor
const express = require('express');

// mongo tiene un ORM llamado mongoose, el cual 
// nos permite interactuar en la base de datos de una forma mas sencilla
// importamos mongoose para tener las conexiones
const mongoose = require('mongoose');

// crear el servidor, lo nombramos "app"
const app = express();

// conectar nuestra aplicacion con mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})

// express no tiene nada, vos tenes que ir agregando lo que necesites

// definimos el puerto y arrancamos el servidor con un callback
app.listen(4000, () => {
    console.log('Servidor Funcionando');
})