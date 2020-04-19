// si consuimos una API, react nos da useEffect y useState
import React, { useEffect, useState } from 'react';
// importamos el routing
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// Route nos permite ir de una pagina a otra

// importamos el cliente de axios 
import clienteAxios from './config/axios';

// Componentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';


function App() {

  // state de la aplicacion
  const [citas, guardarCitas] = useState([]);

  // donde vamos a consumir la API externa
  useEffect( () => {
      const consultarAPI = () => {
        clienteAxios.get('/pacientes')
          .then(respuesta => {
            // colocar en el stateel resultado
            guardarCitas(respuesta.data);
          })
          .catch(error => {
            console.log(error)
          })
      }
      consultarAPI();
  }, [])

  return (
    <Router>
        <Switch>
            <Route
              exact path = "/"
              component={() => <Pacientes citas={citas}/>}
            />
            <Route
              exact path = "/nueva"
              component={NuevaCita}
            />
            <Route
              exact path = "/cita/:id"
              component={Cita}
            />
        </Switch>
    </Router>
  );
}

export default App;
