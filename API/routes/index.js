// conviene que sea un archivo aparte por si la app crece
// y aparecen muchas rutas

// como el routing es algo que viene en express
const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers')


module.exports = function(){

    // agrega nuevos pacientes via POST
    router.post('/pacientes',
        // importamos el controlador
        pacienteController.nuevoCliente

    )

    // necesitamos que esten disponibles todas las rutas
    // en el archivo principal
    return router;
}