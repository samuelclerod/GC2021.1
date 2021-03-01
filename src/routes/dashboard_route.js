const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    res.render('dashboard', {
        title: 'Wellcome to dashboad page',
        message: 'Under construction...'
    })
})

module.exports = route