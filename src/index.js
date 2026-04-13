import Alumno from "./models/alumno.js"
import { sumar, restar, multiplicar, dividir } from "./modules/matematica.js"
import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from "./modules/omdb-wrapper.js"
import express from "express"
import cors from "cors"
const app = express();
const port = 3000 // El puerto 3000 (http://localhost:3000)

// Agrego los Middlewares
app.use(cors());         // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON
// Aca pongo todos los EndPoints
app.get('/', (req, res) => {                // EndPoint "/"
    res.send('Ya estoy respondiendo!')
})

app.get('/saludar/:nombre', (req, res) => {             // EndPoint "/saludar"
    res.send(`Hola ${req.params.nombre}`)
})
app.get('/validarfecha/:ano/:mes/:dia', (req, res) => {

    const fechaStr = `${req.params.ano}-${req.params.mes}-${req.params.dia}`
    const timestamp = Date.parse(fechaStr)
    if (isNaN(timestamp)) {
        return res.status(400).send('Fecha inválida')
    }
    return res.status(200).send(`Tu Fecha de Nacimiento es: ${req.params.ano}/${req.params.mes}/${req.params.dia}`)
})

app.get('/matematica/sumar', (req, res) => {
    const n1 = parseInt(req.query.n1)
    const n2 = parseInt(req.query.n2)
    res.status(200).send(String(sumar(n1, n2)))
})
app.get('/matematica/restar', (req, res) => {
    const n1 = parseInt(req.query.n1)
    const n2 = parseInt(req.query.n2)
    res.status(200).send(String(restar(n1, n2)))
})
app.get('/matematica/dividir', (req, res) => {
    const n1 = parseInt(req.query.n1)
    const n2 = parseInt(req.query.n2)
    res.status(200).send(String(dividir(n1, n2)))
})
app.get('/matematica/multiplicar', (req, res) => {
    const n1 = parseInt(req.query.n1)
    const n2 = parseInt(req.query.n2)
    res.status(200).send(String(multiplicar(n1, n2)))
})
app.get('/omdb/searchbypage', async (req, res) => {
  const search = req.query.search;
  const p      = req.query.p;
  try {
    const resultado = await OMDBSearchByPage(search, p);
    res.status(200).send(resultado);
  } catch (ex) {
    console.log(ex.message);
    res.status(500).send({ respuesta: false, cantidadTotal: 0, datos: [] });
  }
})
app.get('/omdb/searchcomplete', async (req, res) => {
  const search = req.query.search;
  try {
    for(let i = 1; i<=39; i++){
    const resultado = await OMDBSearchComplete(search,i)
    res.status(200).send(resultado)
    }
  } catch (ex) {
    console.log(ex.message);
    res.status(500).send({ respuesta: false, cantidadTotal: 0, datos: [] });
  }
})

// Inicio el Server y lo pongo a escuchar.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

