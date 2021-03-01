const express = require('express')
const handlebars = require('express-handlebars')

const app = express()

app.engine('hbs', handlebars({
    defaultLayout: 'main',
    extname: '.hbs'
    //TODO configure views to src folder
}));

app.set('view engine', 'hbs');

const wellcomeRoute = require('./routes/wellcome_route')
const dashboardRoute = require('./routes/dashboard_route')

app.use('/', wellcomeRoute)
app.use('/dashboard', dashboardRoute)

const PORT = 3333

app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`)
})