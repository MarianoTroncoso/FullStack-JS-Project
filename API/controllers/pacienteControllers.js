// dentro del controlador tenemos funciones con las cuales
// nos asociamos al modelo y al routing

// cuando se crea un nuevo cliente
exports.nuevoCliente = (req, res, next) => {
    // to-do: insertar en la base de datos 
    // req.body es lo que el usuario envia, lo trabajamos con body-parse
    console.log(req.body)


    // enviar respuesta hacia la API
    // lo que esta en las {} es lo que pasamos a la funcion
    res.json({mensaje: 'El cliente se agregó correctamente'});
}