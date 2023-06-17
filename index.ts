import express from 'express'

const app = express()
const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('Hello bitch')
})
app.listen(PORT, () => {
    console.log('Escuchando el puerto', PORT);
})