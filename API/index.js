// archivo principal de configuracion del servidor
const express = require('express');

// crear el servidor, lo nombramos "app"
const app = express();

// express no tiene nada, vos tenes que ir agregando lo que necesites

// definimos el puerto y arrancamos el servidor con un callback
app.listen(4000, () => {
    console.log('Servidor Funcionando');
})