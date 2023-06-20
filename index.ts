import express from 'express'
import routes from './routes'
import connectDB from './db/connect.db'

const app = express()
const PORT = process.env.PORT || 4000
connectDB()

app.use('/api', routes)

app.listen(PORT, () => {
    console.log('Escuchando el puerto', PORT);
})