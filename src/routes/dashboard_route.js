const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    res.send("<h1>Dashboard</h1><p>to do...</p>")
})

module.exports = route