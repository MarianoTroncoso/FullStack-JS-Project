// archivo principal de configuracion del servidor
const express = require('express');

// mongo tiene un ORM llamado mongoose, el cual 
// nos permite interactuar en la base de datos de una forma mas sencilla
// importamos mongoose para tener las conexiones
const mongoose = require('mongoose');

// importamos el routing = archivo de rutas
const routes = require('./routes');

// body-parser extrae una peticion enviada al servidor 
// y lo extrae en una variable que tenemos en un controlador 
// de forma automatica
const bodyParser = require('body-parser'); // basicamente nos sirve para leer inputs

// para que no nos salga el error CORS en la consola 
const cors = require('cors');

// crear el servidor, lo nombramos "app"
const app = express();

// Habilitamos CORS
// whiteliste es el dominio del que vamos a permitir conexiones
const whitelist = ['http://localhost:3000'];
// definimos opciones de cors
const corsOptions = {
    // revisamos el origen de la consulta
    origin: (origin, callback) => {
        const existe = whitelist.some( dominio => dominio === origin);
        if ( existe ) {
            callback(null, true)
        } else {
            callback(new Error('No permitido por CORS'));
        }
    }
}
// app.use(cors(corsOptions));
app.use(cors());

// conectar nuestra aplicacion con mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});

// habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// habilitar routing
app.use('/', routes())

// express no tiene nada, vos tenes que ir agregando lo que necesites

// definimos el puerto y arrancamos el servidor con un callback
app.listen(4000, () => {
    console.log('Servidor Funcionando');
})