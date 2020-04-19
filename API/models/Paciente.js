// importamos mongoose
const mongoose = require('mongoose');
// importacion del esquema, crea la estructura enla base de datos 
const Schema = mongoose.Schema;

// definir nuevo esquema: tabla 
const pacientesSchema = new Schema({
    nombre: {
        type: String,
        // elimina espacios en blanco
        trim: true
    },
    propietarios: {
        type: String,
        trim: true
    },
    fecha: {
        type: String,
        trim: true
    },
    hora: {
        type: String,
        trim: true
    },
    sintomas: {
        type: String,
        trim: true
    },
});

// hacemos disponible el modelo, porque lo requerimos en 
// los controllers
// mongoose lo tiene a todo siempre en una sola instancia
// con los cual podemos referinos al modelo pacientes 
// en toda nuestra aplicacion
module.exports = mongoose.model('Paciente', pacientesSchema);

