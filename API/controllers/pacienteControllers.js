// dentro del controlador tenemos funciones con las cuales
// nos asociamos al modelo y al routing

// importamos el modelo
const Paciente = require('../models/Paciente')

// cuando se crea un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
    // insertar en la base de datos 
    // req.body es lo que el usuario envia, lo trabajamos con body-parse

    // crear objeto de pacinte con datos de req.body
    const paciente = new Paciente(req.body);

    try {
        // guardar en la base de datos
        await paciente.save();
        // enviar respuesta hacia la API
        // lo que esta en las {} es lo que pasamos a la funcion
        res.json({mensaje: 'El cliente se agregó correctamente'});
        
    } catch (error) {
        console.log(error);
        next();
    }


    
}