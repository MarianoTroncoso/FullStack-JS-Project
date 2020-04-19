// dentro del controlador tenemos funciones con las cuales
// nos asociamos al modelo y al routing

// cuando se crea un nuevo cliente
exports.nuevoCliente = (req, res, next) => {
    // to-do: insertar en la base de datos 



    // enviar respuesta hacia la API
    // lo que esta en las {} es lo que pasamos a la funcion
    res.json({mensaje: 'El cliente se agregó correctamente'});
}