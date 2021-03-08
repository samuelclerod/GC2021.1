const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    res.render('dashboard', {
        title: 'Welcome to Home Page',
        message: 'I hope you participate and enjoy our project'
    })
})

module.exports = route