const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({ message: "Olá mundo from express" })
})

const PORT = 3333

app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`)
})