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

// obtencion de todos los pacientes
exports.obtenerPacientes = async (req, res, next) => {

    try {
        // consultar la base de datos
        const pacientes = await Paciente.find({});
        res.json(pacientes);

    } catch (error) {
        console.log(error);
        next();
    }
}

// obtiene un paciente especifico por su id 
exports.obtenerPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findById(req.params.id);
        // si existe el paciente lo retornamos como json
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
};

// acualizar un registro con id 
exports.actualizarPaciente = async (req, res, next) =>{

    try {
        const paciente = await Paciente.findOneAndUpdate({_id: req.params.id}, req.body, {
            // para que traiga el nuevo resultado (actualizado)
            new: true
        });
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

// elimina un paciente por su id 
exports.eliminarPaciente = async (req, res, next) => {
    try {
        await Paciente.findByIdAndDelete({_id: req.params.id});
        res.json({mensaje: 'El paciente fue eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}