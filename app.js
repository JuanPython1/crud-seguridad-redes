import express from "express"
import cors from 'cors';
import db from "./database/db.js"
import { PORT } from "./config.js";
//importar conexion a la BD

import libroRoute from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json() )
app.use('/libros', libroRoute)

try {
    await db.authenticate()
    console.log('conexion exitosa a la DB')
} catch (error) {
    console.log(`El error de conexion es : ${error}`)
}

app.get('/', (req, res) => {
    res.send('Hola mundo')
})


app.listen(PORT, () => {
    console.log('Server UP running in', PORT)
} )

