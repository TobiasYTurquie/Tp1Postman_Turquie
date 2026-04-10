import Alumno from "./models/alumno.js"
import {sumar, restar, multiplicar, dividir} from "./modules/matematica.js"
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from "./modules/omdb-wrapper.js"
import express  from "express"
import cors     from "cors"
const app  = express();
const port = 3000 // El puerto 3000 (http://localhost:3000)

// Agrego los Middlewares
app.use(cors());         // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON
// Aca pongo todos los EndPoints
app.get('/', (req, res) => {                // EndPoint "/"
    res.send('Ya estoy respondiendo!');
})

app.get('/saludar/:nombre', (req, res) => {             // EndPoint "/saludar"
   res.send(`Hola ${req.params.nombre}`);
})
app.get('/validarfecha/:año/:mes/:dia', (req, res) => {
   res.send(`Tu Fecha de Nacimiento es: ${req.params.año}/${req.params.mes}/${req.params.dia}`);
   const validateDate = (año) => isNaN(Date.parse(año))
   if(!validateDate)res.status(404).send
})
// Inicio el Server y lo pongo a escuchar.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

