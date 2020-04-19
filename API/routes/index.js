// conviene que sea un archivo aparte por si la app crece
// y aparecen muchas rutas

// como el routing es algo que viene en express
const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers')


module.exports = function(){

    //  TODOS LOS QUE TENEMOS ACA CON ENDPOINTS

    // agrega nuevos pacientes via POST
    router.post('/pacientes',
        // importamos el controlador
        pacienteController.nuevoCliente
    );

    // Obtencion de registros de pacientes en la base de datos 
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    )

    // necesitamos que esten disponibles todas las rutas
    // en el archivo principal
    return router;
}