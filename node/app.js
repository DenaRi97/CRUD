import express from "express";
import cors from 'cors';
//conexion a lA DB
import db from "./database/db.js";
//importamos enrutador
import blogRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log(`El error de la conexión es:${error}`)
}

// app.get('/', (req, res) =>{
//     res.send('HOLA MUNDO')
// })

app.listen(8000, () =>{
    console.log('Server UP running in http://localhost:8000/')
})

//instalar dependencias de nodemon: npm install -g nodemon, asegurarse que todos los imports tienen el .js porque si no da error