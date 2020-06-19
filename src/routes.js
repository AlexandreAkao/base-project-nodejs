const express = require("express");
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({
        sucess: 'Is Working!'
    })
});

module.exports = routes;