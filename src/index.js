const express = require('express')

const app = express()

const wellcomeRoute = require('./routes/wellcome_route')

app.use('/', wellcomeRoute)

const PORT = 3333

app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`)
})