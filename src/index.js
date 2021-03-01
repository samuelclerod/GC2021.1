const express = require('express')

const app = express()

const wellcomeRoute = require('./routes/wellcome_route')
const dashboardRoute = require('./routes/dashboard_route')

app.use('/', wellcomeRoute)
app.use('/dashboard', dashboardRoute)

const PORT = 3333

app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`)
})